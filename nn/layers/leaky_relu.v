module layers

import vtl
import vtl.autograd
import vtl.nn.internal
import vtl.nn.gates.activation
import vtl.nn.types

// LeakyReluLayer is an activation layer that applies the leaky elu function to the input.
pub struct LeakyReluLayer[T] {
	output_shape []int
}

pub fn leaky_relu_layer[T](ctx &autograd.Context[T], output_shape []int) types.Layer {
	return types.Layer(&LeakyReluLayer[T]{
		output_shape: output_shape.clone()
	})
}

pub fn (layer &LeakyReluLayer[T]) output_shape() []int {
	return layer.output_shape
}

pub fn (_ &LeakyReluLayer[T]) variables() []&autograd.Variable[T] {
	return []&autograd.Variable[T]{}
}

pub fn (layer &LeakyReluLayer[T]) forward(mut input autograd.Variable[T]) !&autograd.Variable[T] {
	output := internal.leaky_relu[T](input.value, vtl.cast[T](0))
	mut result := input.context.variable(output)

	if input.requires_grad {
		gate := activation.leaky_relu_gate[T](input.value)
		gate.cache(mut result, input)!
	}
	return result
}
