/**
 * Created by leizha on 2/13/17.
 * reverse intergert

 这里有两种方法能使一个 integer 来反向的输入.
 1 input: number
 2 output: number
 3 conner case(看看他超出了没有Number.MAX_VALUE 或者小于了没有最小的限制.

 在写题的时候需要注意的:
 output = sign('+' or '-') * res(base)
    1.首先判断这个接受到数字的正负号,
    2.怎么取 每一位位, num%10,
    3.怎么不断的缩小 每一位 num/10,别忘了Math.floor(number)
    4.  res = res*10 + num%10;
        num = Math.floor(num/10);

    5.因为我们把限制条件放在运算的开始,那么我们必须保证最后一次能够运行.
         因为最后一次,我们需要 res *10看超出没有超出结果;
        if(Number.MAX_VALUE / 10 < result || Number.MAX_VALUE - n %10 < result *10) {





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