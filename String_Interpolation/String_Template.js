function getMessage(){
    const year = new Date().getFullYear();
    
    // earlier we used to write this using concatination
    return "the year is " + year ;
   
    // now in ES6 we write like this 
    return `The year is ${year}`;

} 