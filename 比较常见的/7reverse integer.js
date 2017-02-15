/**
 * Created by leizha on 2/13/17.
 * reverse intergert
 */
// string 的写法
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
var a =-10;
console.log(reverseInterget(a));

//怎么从interge 变成 integer 不用 string 作为交换题

function reversInt(n) {
    var sign = n < 0 ? -1 :1;
    n = Math.abs(n);
    var result = 0;

    while(n > 0) {
        // 这一部分是看有没有超出最大的限制
         if(Number.MAX_VALUE / 10 < result || Number.MAX_VALUE - n %10 < result *10) {
             return 0;
         }
         //怎么让要来的数回去，就是让返回的数每次都乘以n
        result = result * 10 + n%10;
        n = Math.floor(n/10);
;
    }
      return sign * result;
}

console.log(reversInt(-10));