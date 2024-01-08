function createBookShop(inventory){
    return{
        inventory: inventory,
        // so here in object literal we if me have same key and value name we can just write like this
        // inventory,
        inventoryValue: function(){
            // so in object literal we dont need to write function keyword 
            // inventory(){}, == we can remove colan and function and it will work smae
            return this.inventory.reduce((total,book) => total + book.price, 0);
        },
        priceForTitle: function(title){
            return this.inventory.find(book => book.title === title).price;
        }

    };
}

const inventory = [
    { title: 'Harry Potter' ,  price: 10 },
    {title: 'Eloquent Javascript', price:15}
];
const bookShop = createBookShop(inventory);


// another example 

function savefile(){
    $.ajax({ method : 'POST', url:url, data:data});
    // so here we can replace {method :'POST},url,data
}
const url = "http://fileupload.com";
const data =  { color: ' red'};

savefile(url, data);