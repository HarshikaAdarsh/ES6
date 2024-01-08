// to find result for all having & operator in between which returns a boolean value
var computers = [
  {name : 'Apple', ram: 64},
  {name : 'Hp', ram: 16},
  {name : 'Acer', ram: 8},
];

computers.every(function(computer){
      return computer.ram>8;
});
