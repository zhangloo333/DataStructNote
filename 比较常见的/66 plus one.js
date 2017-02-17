/**
 * Created by leizha on 2/16/17.

 这题并不是在每一个位上都加一，而是在最后一位上加一




 */

var plusOne = function(digits) {
    var n = digits.length;

    for(var i = n-1; i>=0; i--) {
        if(digits[i] < 9) {
            digits[i] ++;
            return digits;
        }
        digits[i] = 0;
    }

    var newNumber = [1];

    newNumber=newNumber.concat(digits);
    console.log(digits);
    return newNumber;
};

var a =[9,1,2,3,4,9];
console.log(plusOne(a));