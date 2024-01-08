var number = [ 1 , 2 , 3 , 4];
var doubledNumber = [];
var doubled = number.map(function(number){
    return number * 2;
});
doubled;
doubledNumber;

var cars = [
    {model : 'Bugato', price: 'expensive'},
    {model: 'swift', price: 'cheap'}
];
var prices = cars.map(function(car){
    return car.price ;
});
prices;