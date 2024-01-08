//opposite to every where it return a boolean value 
//here we have or operator between them 
var computers = [
    {name : 'Apple', ram: 64},
    {name : 'Hp', ram: 16},
    {name : 'Acer', ram: 8},
  ];
  
  computers.some(function(computer){
        return computer.ram>8;
  });
  
  function Field(value){
      this.value = value;
  }
  Field.prototype.validate = fucntion(){
      return this.value.length > 0;
  }

  var username = new Field("2cool");
  var password = new Field("my_password");

  username.validdate();

  var username = new Field("2cool");
  var password = new Field("my_password");

  var fields = [username, password];

  var formIsValid = fields.every(function(field){
    return field.validate();
  });

  if (formIsValid){
    //allow use to submit
  }
  else{
    //show an error message
  }