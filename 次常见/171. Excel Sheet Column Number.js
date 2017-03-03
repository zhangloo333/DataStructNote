/**
 * Created by leizha on 3/2/17.
 这题题目的意思就是：将26进制字母转化为10进制数字
 A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28
 没有coner case

 input 大写的A, B, C 什么的
 output 是一个 number

 这一题开始没有写出来，来自于对 两位的时候怎么进制没有搞懂；
 */

/**
 * @param {string} s
 * @return {number}
 */
// var titleToNumber = function(s) {
//     var res = 0;
//
//     for(var i = 0; i < s.length; i++) {
//         res = res + (s.charCodeAt(i) - "A".charCodeAt(0)+1)* Math.pow(26,i);
//     }
//     return res;
// };

var titleToNumber = function(s) {
    var res = 0;
    var sum1 = []

    for(var i = 0; i < s.length; i++) {
        sum1.push(s.charCodeAt(i) - "A".charCodeAt(0)+1);
    }
    console.log(sum1);
    for(var i = 0; i < sum1.length; i++){
        res = res*26 +sum1[i];
        console.log("res  " + res );
    }
    return res;
};    //


var a ="BAA";
console.log(titleToNumber(a));