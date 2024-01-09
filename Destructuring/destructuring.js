// destructuring is all about making assignments of properties little bit easier by reducing duplicate code

//ES6
const {type} = expense ;
// here type is not any object litreral
// this means that we declare a new  variable type and want to reference the expense.type property
const {amount} = expense ;

// we can combine this 
 const { type1, amount1 } = expense;
 type1;
 amount1;

 // another Feature