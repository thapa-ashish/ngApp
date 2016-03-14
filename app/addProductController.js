angular.module('myApp').controller('addProductController',['$location','productService',function($location,productService){

	var index=0;
	index++;

     this.hidemenu="true";
	

	/*this.products=[
	{id:1,name:"tomato", by:"rewat ko bari",inStock:'YES',offers:'YES'},
	{id:2,name:"potato", by:"samjhana ko bari",inStock:'YES',offers:'YES'},
	{id:3,name:"onion", by:"mero aafnai bari",inStock:'YES',offers:'YES'}
	];*/

var products=productService.list();

//add product
	this.addProduct=function(){

		var name=this.product.name;
		var by=this.product.by;
		var instock=this.product.inStock;
		var offer=this.product.offers;

var id=productService.list().length+1;
		productService.products.push({id:id,
			name:name,
			by:by,
			inStock:instock,
			offers:offer});	
	}


//delete product
	this.delete=function(product){
		console.log(product.id);
		var id=products.indexOf(product);
		productService.products.splice(id,1);
	}


//edit product
this.edit=function(product){
	
	 console.log(product.id);
	 $location.path('/edit').search({id: product.id});
}


}]);