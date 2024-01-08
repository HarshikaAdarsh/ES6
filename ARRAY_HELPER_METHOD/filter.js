var products = [
    {name :'cucumber', type:'vegetable'},
    {name :'banana' , type : 'fruit'},
    {name :'carrot', type:'vegetable'},
    {name :'Apple', type:'fruit'}
];
var filteredProducts = [];
for(var i=0; i< products.length;i++){
    if(products[i].type == 'fruit'){
        filteredProducts.push(products[i]);
       }
    }
console.log(filteredProducts);

// another method to write this

products.filter(function(product){
    return product.type === 'vegetable';
 });

 // more complex filter 
 var products = [
    {name :'cucumber', type:'vegetable' , quantity:0 , price : 10 },
    {name :'banana' , type : 'fruit', quantity:8 , price : 12 },
    {name :'carrot', type:'vegetable', quantity:6 , price : 13 },
    {name :'Apple', type:'fruit', quantity:10 , price : 15 }
];
var filteredProducts = [];
for(var i=0; i< products.length;i++){
    if(products[i].type == 'fruit' && products[i].quantity <= 10 && products[i].price >=15){
        filteredProducts.push(products[i]);
       }
}
console.log(filteredProducts);

// filter helper example

var post= { id : 4 , title: 'new post'};
var commnets = [
    {postId : 4, content : 'awesome post'},
    {postId : 3, content : 'it was ok'},
    {postId : 4, content : 'neat'}
];

function commnetsForPost(post, commnets){
    return comments.filter(function(comment){
        return comment.postId === post.id;
    });
}
commnetsForPost(post, comments);