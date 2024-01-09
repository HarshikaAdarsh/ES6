// Destructuring is all about pulling off individual elements

const comapnies = [
    'google',
    'Facebook',
    'Uber'
];

const [name1, name2, name3, name4 ] = companies;
name1;
name2;
name3;
name4;

const {length} = companies;

// To destructure the property we use curly braces
// To destructure the element we use square bracket
