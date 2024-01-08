// when we dont want to specify the exact arguments using REST we can write dot dot dot (...)
function addNumbers(...numbers){
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0 );

}
addNumbers(1,2,3,4,5,6,7,8,9,10);

// SPREAD
//we can add elements in the array 
 const defaultColors = ['red', 'green'];
 const userFavoriteColors = ['orange', 'yellow'];
  
 [...defaultColors, ...userFavoriteColors];

 //another example
 function validateShoppingList(...items){
    if(items.indexOf < 0){
        return ['milk', ...items];
    }
    return items;
 }
 validateShoppingList('oranges', 'bread', 'eggs');


 //another example
 const MathLibrary = {
    calculateProuduct (...rest){
        console.log('Please use the multiply method instead');
        return this.multiply(...rest);
    },
    multiply(a,b){
        return a*b;
        }
 };