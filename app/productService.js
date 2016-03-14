angular.module('myApp').factory('productService',function(){
	
var products=[
	{id:1,name:"tomato", by:"rewat ko bari",inStock:'YES',offers:'YES'},
	{id:2,name:"potato", by:"samjhana ko bari",inStock:'YES',offers:'YES'},
	{id:3,name:"onion", by:"mero aafnai bari",inStock:'YES',offers:'YES'}
	];

return {
list: function() {
return products;
}
}
});