//REDUCE RETURN SINGLE VALUE 
// it accumulate results of function 
// it do not chnage the array only accumulate result and store in different variable
var nums = [10, 20, 30]
var sum = 0;
nums.reduce(function(sum, num){
    return sum + num;
},0);
console.log (sum);

// goood example of reduce 
 
function Balanceparen(String){
    return String.split("").reduce(function(previous, char){
        if (char === "("){return ++previous};
        if (char === ")"){return --previous};
        return previous;
    });
}

Balanceparen("((()))")