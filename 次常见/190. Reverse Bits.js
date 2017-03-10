/**
 * Created by leizha on 3/8/17.
 *
 *
 * 解题的思路：
 * 1 把十进制数 转换成 二进制数；
 *      两种方法：可以转 正负数
 *      function dec2bin(dec){
            return (dec >>> 0).toString(2);
        }
        6 转换成2 进制 = 110
            6%2 =0 6／2=3；
            3%2=1；3／2 =1；
            1%2=1；1／2 = 0；

 * 2 把二进制数的reverse， 可以用个stack
 * 3 转回整数

 coner case  =0;

 因为output 需要输出一个 二进制数；

 怎么把一个 十进制数 转化成二进制数；
 number.toString(2：2进制／8:8进制／16：16进制)
 怎么把一个负数数转化成 二进制数：
 (number >>> 0).toString(2：2进制／8:8进制／16：16进制)
 */



/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if(n == 0) return 0;

    var stack = [];
    for(var i =0; i<32; i++) {
        if(n>0) {
            stack.push(n%2);
            n = parseInt(n/2);
        } else stack.push(0);
    }
    console.log(stack);
    return parseInt(stack.join(""),2);
};

var n =1;
console.log(reverseBits(n));