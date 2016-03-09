angular.module('myApp').controller('addProductController', function(){

	var index=0;
	index++;
	

	this.products=[
	{name:"tomato", by:"rewat ko bari",inStock:'YES',offers:'YES'},
	{name:"potato", by:"samjhana ko bari",inStock:'YES',offers:'YES'},
	{name:"onion", by:"mero aafnai bari",inStock:'YES',offers:'YES'}
	];

	this.addProduct=function(){

		var name=this.product.name;
		var by=this.product.by;
		var instock=this.product.inStock;
		var offers=this.product.offers;

		this.products.push({name:name,by:by,inStock:instock,offers:offers});
	}
	

	
		

	});