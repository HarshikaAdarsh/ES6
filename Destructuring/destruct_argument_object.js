var savedFiled = {
    extension : 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary(file){
    // now here we can destrucyture our argument's object
    // function fileSummary({name, extension, size}, {color}) 

      return `The file ${file.name} .${file.extension} is of size ${file.size}`;
     // we destructure here also 
     // return `The file ${name} .${extension} is of size ${size} ${color}`;

}

fileSummary(savedFiled,{color:'red'});
