var searchModuleIndex = ["vtl","etype","la","storage",];
var searchIndex = ["Tensor","apply","assign","broadcast_to","copy","custom_iterator","diagonal","equal","fill","get","is_colmajor","is_colmajor_contiguous","is_contiguous","is_matrix","is_rowmajor","is_rowmajor_contiguous","is_square_matrix","is_vector","iterator","iterators","map","napply","nmap","offset","rank","ravel","reshape","set","size","slice","str","strided_offset","swapaxes","t","transpose","view","broadcastable","TensorData","empty","empty_like","identity","eye","zeros","zeros_like","ones","ones_like","full","full_like","BuildRangeData","range","seq","from_1d","from_2d","from_varray","new_tensor","new_tensor_like","new_tensor_like_with_memory","new_tensor_like_with_shape","new_tensor_from_varray","MapFn","ApplyFn","NMapFn","NApplyFn","IteratorHandler","TensorIterator","next","IteratorBuildData","[]Tensor","iterators","[]TensorIterator","next","diag","diag_flat","tril","tril_offset","tril_inpl","tril_inpl_offset","triu","triu_offset","triu_inpl","abs","acos","asin","atan","atan2","cbrt","ceil","cos","exp","erf","exp2","floor","fmod","gamma","hypot","log10","log_gamma","log_n","max","min","pow","radians","round","sin","sinh","sqrt","tan","tanh","tensor_str","random","random_seed","array_split","array_split_expl","split","split_expl","hsplit","hsplit_expl","vsplit","vsplit_expl","dsplit","dsplit_expl","AxisData","vstack","hstack","dstack","column_stack","stack","concatenate","expand_dims","new_storage_from_varray","storage_to_varray","MemoryFormat","tensor_to_varray","tensor_as_type","Num","as_type","prettify","strsci","etype","esize","ptr","str","num_as_type","ptr_to_val_of_type","str_esize","arr_esize","arr_etype","dot","dger","det","inv","matmul","tensordot","CpuStorage","StorageStrategy","NullStorage","Storage","StorageData","new_storage","new_storage_like","new_storage_like_with_len","create_storage","create_storage_from_c_array","storage_to_varray","storage_strategy","storage_clone","storage_offset","storage_get","storage_set","storage_fill","storage_size",];
var searchModuleData = [["<div align=\"center\">","vtl.html"],[" ","etype.html"],[" ","la.html"],[" ","storage.html"],];
var searchData = [["vtl"," `Tensor` is the main structure defined by VTL to manage N Dimensional  Array of","vtl.html#Tensor","struct "],["vtl"," apply applies a function to each element of a given Tensor ","vtl.html#Tensor.apply","fn (Tensor)"],["vtl"," assign sets the values of an Tensor equal to the values of another  Tensor of t","vtl.html#Tensor.assign","fn (Tensor)"],["vtl"," broadcast_to broadcasts a Tensor to a compatible shape with no  data copy ","vtl.html#Tensor.broadcast_to","fn (Tensor)"],["vtl"," copy returns a copy of a Tensor with a particular memory  layout, either rowmaj","vtl.html#Tensor.copy","fn (Tensor)"],["vtl"," iterator creates an iterator through a Tensor with custom data ","vtl.html#Tensor.custom_iterator","fn (Tensor)"],["vtl"," diagonal returns a view of the diagonal entries  of a two dimensional tensor ","vtl.html#Tensor.diagonal","fn (Tensor)"],["vtl"," checks if two Tensors are equal ","vtl.html#Tensor.equal","fn (Tensor)"],["vtl"," fill fills an entire Tensor with a given value ","vtl.html#Tensor.fill","fn (Tensor)"],["vtl"," get returns a scalar value from a Tensor at the provided index ","vtl.html#Tensor.get","fn (Tensor)"],["vtl"," is_colmajor returns if a Tensor is supposed to store its data in Col-Major  ord","vtl.html#Tensor.is_colmajor","fn (Tensor)"],["vtl"," is_colmajor verifies if a Tensor stores its data in Col-Major  order ","vtl.html#Tensor.is_colmajor_contiguous","fn (Tensor)"],["vtl"," is_contiguous verifies that a Tensor is contiguous independent of  memory layou","vtl.html#Tensor.is_contiguous","fn (Tensor)"],["vtl"," is_matrix returns if a Tensor is a nxm matrix or not ","vtl.html#Tensor.is_matrix","fn (Tensor)"],["vtl"," is_rowmajor returns if a Tensor is supposed to store its data in Row-Major  ord","vtl.html#Tensor.is_rowmajor","fn (Tensor)"],["vtl"," is_rowmajor verifies if a Tensor stores its data in Row-Major  order ","vtl.html#Tensor.is_rowmajor_contiguous","fn (Tensor)"],["vtl"," is_matrix returns if a Tensor is a square matrix or not ","vtl.html#Tensor.is_square_matrix","fn (Tensor)"],["vtl"," is_matrix returns if a Tensor is a square 1D vector or not ","vtl.html#Tensor.is_vector","fn (Tensor)"],["vtl"," iterator creates an iterator through a Tensor ","vtl.html#Tensor.iterator","fn (Tensor)"],["vtl"," Iterate with n tensors  iterators creates an array of iterators through a list ","vtl.html#Tensor.iterators","fn (Tensor)"],["vtl"," map maps a function to a given Tensor retuning a new Tensor with same shape ","vtl.html#Tensor.map","fn (Tensor)"],["vtl"," apply applies a function to each element of a given Tensor ","vtl.html#Tensor.napply","fn (Tensor)"],["vtl"," map maps a function to a given list of Tensor retuning a new Tensor with same s","vtl.html#Tensor.nmap","fn (Tensor)"],["vtl"," offset returns the index to a Tensor's data at  a given index ","vtl.html#Tensor.offset","fn (Tensor)"],["vtl"," rank returns the number of dimensions of a given Tensor ","vtl.html#Tensor.rank","fn (Tensor)"],["vtl"," ravel returns a flattened view of an Tensor if possible,  otherwise a flattened","vtl.html#Tensor.ravel","fn (Tensor)"],["vtl"," reshape returns an Tensor with a new shape ","vtl.html#Tensor.reshape","fn (Tensor)"],["vtl"," set copies a scalar value into a Tensor at the provided index ","vtl.html#Tensor.set","fn (Tensor)"],["vtl"," size returns the number of allocated elements for a given tensor ","vtl.html#Tensor.size","fn (Tensor)"],["vtl"," slice returns a tensor from a variadic list of indexing operations ","vtl.html#Tensor.slice","fn (Tensor)"],["vtl"," str returns the string representation of a Tensor ","vtl.html#Tensor.str","fn (Tensor)"],["vtl"," stride offset returns the index of the starting offset  for arrays that may be ","vtl.html#Tensor.strided_offset","fn (Tensor)"],["vtl"," swapaxes returns a view of an tensor with two axes  swapped. ","vtl.html#Tensor.swapaxes","fn (Tensor)"],["vtl"," t returns a ful transpose of an tensor, with the axes  reversed ","vtl.html#Tensor.t","fn (Tensor)"],["vtl"," transpose permutes the axes of an tensor in a specified  order and returns a vi","vtl.html#Tensor.transpose","fn (Tensor)"],["vtl"," view returns a view of a Tensor, identical to the  parent but not owning its ow","vtl.html#Tensor.view","fn (Tensor)"],["vtl"," broadcastable takes two Tensors and either returns a valid  broadcastable shape","vtl.html#broadcastable","fn "],["vtl","","vtl.html#TensorData","struct "],["vtl"," Return a new Tensor of given shape and type, without initializing entries ","vtl.html#empty","fn "],["vtl"," Return a new Tensor with the same shape and type as a given Tensor. ","vtl.html#empty_like","fn "],["vtl"," The identity array is a square array with ones on the main diagonal. ","vtl.html#identity","fn "],["vtl"," Return a 2-D array with ones on the diagonal and zeros elsewhere. ","vtl.html#eye","fn "],["vtl"," Return a new Tensor of given shape and type, filled with zeros ","vtl.html#zeros","fn "],["vtl"," Return an Tensor of zeros with the same shape and type as a given Tensor ","vtl.html#zeros_like","fn "],["vtl"," Return a new Tensor of given shape and type, filled with ones ","vtl.html#ones","fn "],["vtl"," Return an Tensor of ones with the same shape and type as a given Tensor ","vtl.html#ones_like","fn "],["vtl"," Return a new Tensor of given shape and type, filled with val ","vtl.html#full","fn "],["vtl"," Return a full Tensor with the same shape and type as a given Tensor ","vtl.html#full_like","fn "],["vtl","","vtl.html#BuildRangeData","struct "],["vtl"," range returns a Tensor containing values ranging from [from, to) ","vtl.html#range","fn "],["vtl"," seq returns a Tensor containing values ranging from [0, to) ","vtl.html#seq","fn "],["vtl"," from_1d takes a one dimensional array of floating point values  and returns a o","vtl.html#from_1d","fn "],["vtl"," from_2d takes a two dimensional array of floating point values  and returns a t","vtl.html#from_2d","fn "],["vtl"," from_varray takes a one dimensional array of T values  and coerces it into an a","vtl.html#from_varray","fn "],["vtl"," new_tensor allocates a Tensor onto CPU among other storage models with a given ","vtl.html#new_tensor","fn "],["vtl"," new_tensor_like returns a new tensor created with similar storage properties  a","vtl.html#new_tensor_like","fn "],["vtl"," new_tensor_like_with_memory returns a new tensor created with similar storage p","vtl.html#new_tensor_like_with_memory","fn "],["vtl"," new_tensor_like_with_shape returns a new tensor created with similar storage pr","vtl.html#new_tensor_like_with_shape","fn "],["vtl"," new_tensor_from_varray returns a new tensor created from a v array ","vtl.html#new_tensor_from_varray","fn "],["vtl","","vtl.html#MapFn","type "],["vtl","","vtl.html#ApplyFn","type "],["vtl","","vtl.html#NMapFn","type "],["vtl","","vtl.html#NApplyFn","type "],["vtl"," IteratorHandler defines a function to use in order to mutate  iteration positio","vtl.html#IteratorHandler","type "],["vtl"," TensorIterator is a struct to hold a Tensors  iteration state while iterating t","vtl.html#TensorIterator","struct "],["vtl"," next calls the iteration type for a given iterator  which is either flat or str","vtl.html#TensorIterator.next","fn (TensorIterator)"],["vtl","","vtl.html#IteratorBuildData","struct "],["vtl","","vtl.html#[]Tensor","type "],["vtl"," Iterate with n tensors  iterators creates an array of iterators through a list ","vtl.html#[]Tensor.iterators","fn ([]Tensor)"],["vtl","","vtl.html#[]TensorIterator","type "],["vtl"," next calls the iteration type for a given list of iterators  which is either fl","vtl.html#[]TensorIterator.next","fn ([]TensorIterator)"],["vtl"," Construct a diagonal array.  Input must be one dimensional and will be placed a","vtl.html#diag","fn "],["vtl"," Construct a diagonal array.  The flattened input is placed along the diagonal  ","vtl.html#diag_flat","fn "],["vtl"," Lower triangle of an array.  Returns a copy of an array with elements above the","vtl.html#tril","fn "],["vtl"," Lower triangle of an array.  Returns a copy of an array with elements above the","vtl.html#tril_offset","fn "],["vtl"," Lower triangle of an array.  Modifies an array inplace with elements above the ","vtl.html#tril_inpl","fn "],["vtl"," Lower triangle of an array.  Modifies an array inplace with elements above the ","vtl.html#tril_inpl_offset","fn "],["vtl"," Upper triangle of an array.  Returns a copy of an array with elements below the","vtl.html#triu","fn "],["vtl"," Upper triangle of an array.  Returns a copy of an array with elements below the","vtl.html#triu_offset","fn "],["vtl"," Upper triangle of an array.  Modifies an array inplace with elements below the ","vtl.html#triu_inpl","fn "],["vtl"," abs returns the elementwise abs of an tensor ","vtl.html#abs","fn "],["vtl"," acos returns the elementwise acos of an tensor ","vtl.html#acos","fn "],["vtl"," asin returns the elementwise asin of an tensor ","vtl.html#asin","fn "],["vtl"," atan returns the elementwise atan of an tensor ","vtl.html#atan","fn "],["vtl"," atan2 returns the atan2 elementwise of two tensors ","vtl.html#atan2","fn "],["vtl"," cbrt returns the elementwise cbrt of an tensor ","vtl.html#cbrt","fn "],["vtl"," ceil returns the elementwise ceil of an tensor ","vtl.html#ceil","fn "],["vtl"," cos returns the elementwise cos of an tensor ","vtl.html#cos","fn "],["vtl"," exp returns the elementwise exp of an tensor ","vtl.html#exp","fn "],["vtl"," erf returns the elementwise erf of an tensor ","vtl.html#erf","fn "],["vtl"," exp2 returns the elementwise exp2 of an tensor ","vtl.html#exp2","fn "],["vtl"," floor returns the elementwise floor of an tensor ","vtl.html#floor","fn "],["vtl"," fmod returns the fmod elementwise of two tensors ","vtl.html#fmod","fn "],["vtl"," gamma returns the elementwise gamma of an tensor ","vtl.html#gamma","fn "],["vtl"," hypot returns the hypot elementwise of two tensors ","vtl.html#hypot","fn "],["vtl"," log10 returns the elementwise log10 of an tensor ","vtl.html#log10","fn "],["vtl"," log_gamma returns the elementwise log_gamma of an tensor ","vtl.html#log_gamma","fn "],["vtl"," log_n returns the log_n elementwise of two tensors ","vtl.html#log_n","fn "],["vtl"," max returns the max elementwise of two tensors ","vtl.html#max","fn "],["vtl"," min returns the min elementwise of two tensors ","vtl.html#min","fn "],["vtl"," pow returns the pow elementwise of two tensors ","vtl.html#pow","fn "],["vtl"," radians returns the elementwise deg2rad of an tensor ","vtl.html#radians","fn "],["vtl"," round rounds elements of an tensor elementwise ","vtl.html#round","fn "],["vtl"," sin returns the elementwise sin of an tensor ","vtl.html#sin","fn "],["vtl"," sinh returns the elementwise sinh of an tensor ","vtl.html#sinh","fn "],["vtl"," sqrt returns the elementwise square root of an tensor ","vtl.html#sqrt","fn "],["vtl"," tan returns the elementwise tan of an tensor ","vtl.html#tan","fn "],["vtl"," tanh returns the elementwise tanh of an tensor ","vtl.html#tanh","fn "],["vtl"," public method for printing arrays, if custom behavior is needed ","vtl.html#tensor_str","fn "],["vtl","","vtl.html#random","fn "],["vtl","","vtl.html#random_seed","fn "],["vtl"," Split an array into multiple sub-arrays.  Please refer to the split documentati","vtl.html#array_split","fn "],["vtl"," Split an array into multiple sub-arrays.  Please refer to the split documentati","vtl.html#array_split_expl","fn "],["vtl"," Split an array into multiple sub-arrays. The array will be divided into  N equa","vtl.html#split","fn "],["vtl"," Split an array into multiple sub-arrays. The array will be divided into  The en","vtl.html#split_expl","fn "],["vtl"," Split an array into multiple sub-arrays horizontally (column-wise).  Please ref","vtl.html#hsplit","fn "],["vtl"," Split an array into multiple sub-arrays horizontally (column-wise)  Please refe","vtl.html#hsplit_expl","fn "],["vtl"," Split an array into multiple sub-arrays vertically (row-wise).  Please refer to","vtl.html#vsplit","fn "],["vtl"," Split an array into multiple sub-arrays vertically (row-wise).  Please refer to","vtl.html#vsplit_expl","fn "],["vtl"," Split array into multiple sub-arrays along the 3rd axis (depth).  Please refer ","vtl.html#dsplit","fn "],["vtl"," Split array into multiple sub-arrays along the 3rd axis (depth).  Please refer ","vtl.html#dsplit_expl","fn "],["vtl","","vtl.html#AxisData","struct "],["vtl"," Stack arrays in sequence vertically (row wise) ","vtl.html#vstack","fn "],["vtl"," Stack arrays in sequence horizontally (column wise) ","vtl.html#hstack","fn "],["vtl"," Stack arrays in sequence depth wise (along third axis) ","vtl.html#dstack","fn "],["vtl"," Stack 1-D arrays as columns into a 2-D array. ","vtl.html#column_stack","fn "],["vtl"," Join a sequence of arrays along a new axis. ","vtl.html#stack","fn "],["vtl"," concatenates two Tensors together ","vtl.html#concatenate","fn "],["vtl"," expand_dims adds an axis to a Tensor in order to support  broadcasting operatio","vtl.html#expand_dims","fn "],["vtl","","vtl.html#new_storage_from_varray","fn "],["vtl","","vtl.html#storage_to_varray","fn "],["vtl"," `MemoryFormat` is a sum type that lists the possible memory layouts ","vtl.html#MemoryFormat","enum "],["vtl"," tensor_to_varray<T> returns the flatten representation of a tensor in a v array","vtl.html#tensor_to_varray","fn "],["vtl"," tensor_as_type<T> returns a new Tensor with a cast to a given type ","vtl.html#tensor_as_type","fn "],["etype"," `Num` is a sum type that lists the possible types to be used to define tensor v","etype.html#Num","type "],["etype"," as_type<T> returns a Num casted to a given T type ","etype.html#Num.as_type","fn (Num)"],["etype"," formats a floating point value to be \"pretty\" ","etype.html#Num.prettify","fn (Num)"],["etype"," return a string of the input if f64 or f32 in scientific notation  with digit_n","etype.html#Num.strsci","fn (Num)"],["etype"," etype returns the string representation of the specific type of f ","etype.html#Num.etype","fn (Num)"],["etype"," esize returns the int representation of the specific size of f ","etype.html#Num.esize","fn (Num)"],["etype"," esize returns a safe pointer to a given Num ","etype.html#Num.ptr","fn (Num)"],["etype"," str  returns the string representation for a given Num f ","etype.html#Num.str","fn (Num)"],["etype"," num_as_type<T> returns a Num casted to a given T type ","etype.html#num_as_type","fn "],["etype"," ptr_to_val_of_type returns the number obtained from ptr ","etype.html#ptr_to_val_of_type","fn "],["etype"," str_esize returns the int representation of a given type ","etype.html#str_esize","fn "],["etype"," str_esize returns the int representation of the size for a given array of Num ","etype.html#arr_esize","fn "],["etype"," str_etype returns the type for a given array of Num ","etype.html#arr_etype","fn "],["la","","la.html#dot","fn "],["la","","la.html#dger","fn "],["la","","la.html#det","fn "],["la","","la.html#inv","fn "],["la","","la.html#matmul","fn "],["la","","la.html#tensordot","fn "],["storage"," CpuStorage - this implementation will change once Generics are working correctl","storage.html#CpuStorage","struct "],["storage","","storage.html#StorageStrategy","enum "],["storage","","storage.html#NullStorage","struct "],["storage"," sum type to be used for different strategies  pub interface Storage {  	element","storage.html#Storage","type "],["storage","","storage.html#StorageData","struct "],["storage","","storage.html#new_storage","fn "],["storage","","storage.html#new_storage_like","fn "],["storage","","storage.html#new_storage_like_with_len","fn "],["storage","","storage.html#create_storage","fn "],["storage","","storage.html#create_storage_from_c_array","fn "],["storage","","storage.html#storage_to_varray","fn "],["storage","","storage.html#storage_strategy","fn "],["storage","","storage.html#storage_clone","fn "],["storage","","storage.html#storage_offset","fn "],["storage","","storage.html#storage_get","fn "],["storage","","storage.html#storage_set","fn "],["storage","","storage.html#storage_fill","fn "],["storage","","storage.html#storage_size","fn "],];
