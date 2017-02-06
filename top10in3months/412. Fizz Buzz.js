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
