//earlier we used to write function like this
const add = function(a,b){
    return a+b;
}
add(1,2);

// feature 1 =>
//// for single expression
// In ES6 we use "FAT arrow"
const sub = (a,b) =>{
    return a-b;
}
sub(3, 1);

// above code is good to go for single expression but we can improvise more
 const mul = (a,b) => a*b;
 mul(3,4);
// we have removed curly braces which i c/d Implicit return
// Implicit return = automatically returning the value without return key word


//feature 2 
// for single argument 
 const double = function(number){
    return 2*number;
 }
 double (8); 
 //now after refactoring it 
 const doubleno = number => 2*number;
 return doubleno(3);

 //example
 // before we used to write like this
 const numbers= [1,2,3];
 numbers.map(function(number){
     return 2*number;
 });

// after we write this in ES6
const no = [1,3,6,7];
no.map(no=> 2*no );

