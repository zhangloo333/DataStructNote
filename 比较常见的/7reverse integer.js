/**
 * Created by leizha on 2/13/17.
 * reverse intergert
 */

function reverseInterget(n) {
    if(n<10 && n > -10){
        return n;
    }

    var bit = 0;
    var sign = 1;
    var output ="";

    if(n<0){
        sign *= -1;
        n = Math.abs(n);
    }

    while(n >0){
        bit = n%10
        n = Math.floor(n/10);
        output += bit;
    }

    return parseInt(output)*sign;
}
Number.MAX_VALUE
var a =-123;
console.log(reverseInterget(a));