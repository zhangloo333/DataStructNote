/**
 * Created by leizha on 1/31/17.
 * fizeebuzz
 */

function fizzbuzz(n) {
    if(n == null && n.length ==0){
        return -1;
    }
    var nNum = parseInt(n);
    for(var i = 1; i <= n; i++) {
        if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        } else if (i%5 == 0) {
            console.log("buzz");
        } else if(i%3 == 0) {
            console.log("Fizee");
        } else {
            console.log(""+i);
        }
    }
}

fizzbuzz("15");

function fizzbuzz1(n) {
    if(n == null && n.length ==0){
        return -1;
    }
    var output = [];
    var nNum = parseInt(n);
    for(var i = 1; i <= n; i++) {
        if(i%3 == 0 && i%5 == 0){
            output.push("FizzBuzz");
        } else if (i%5 == 0) {
            output.push("Buzz");
        } else if(i%3 == 0) {
            output.push("Fizz");
        } else {
            output.push(i.toString());
        }
    }
    return output;
}

console.log(fizzbuzz1("15"));