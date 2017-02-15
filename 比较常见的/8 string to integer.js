/**
 * Created by leizha on 2/14/17.

 1.discards all leading whitespaces
 2.sign of the number
 3.overflow
 4. invalid input

 trim 不会直接对原函数做修改，而是直接生成一个新的str。

 "  -0012a42"
 超出的范围并没有

 */

// discards all leading withespaces
// var a = '   -2345   ';
// console.log(a);
// console.log(a.length);
//
// var a = a.trim();
//
// console.log(a);
// console.log(a.length);
//
// //解决符号的问题
// var i = 0
// var sign = 1;
// while(i < a.length){
//     if(a[i] == "-") sign *= -1;
//     console.log(i++);
// }
//
// //解决是数字的问题
//
// console.log(sign);


var myAtoi = function(num) {
    num = num.trim();
    var len = num.length;
    var res = 0;
    var sign = 1;
    var counter = 0;

    for(var i =0; i<len; i++){
        console.log("a[i]-----"+num[i]);
        if(num[i] == "-" || num[i] == "+") {

            num[i] == "-" ? sign *= -1 : sign;
            counter++;
            if(counter>1) return 0;
        }
        if(Number.MAX_VALUE > res || Number.MIN_VALUE < res) {
            if(num[i]>= "0" && num[i] <= "9") {
                res = res *10 + (num[i] - "0");
            }
        } else {
            if(sign <0) return -2147483647;
            else return 2147483648;
        }
    }
    return sign*res;
};

//正确的答案

var myAtoi = function(str) {
    var sign = 1;
    var base = 0;
    var i = 0;
    while(str[i] == " "){
        i++;
    }
    if(str[i] == "-" || str[i] == "+") {
        sign = 1- 2*(str[i++] == "-");
    }

    while(str[i] >= "0" && str[i] <= "9") {
        if(base > 214748364 || base == 214748364 && str[i] - "0" > 7) {
            if(sign == 1) {
                return 2147483647;
            } else {
                return -2147483648;
            }
        }

        base  = 10 * base + (str[i++] - '0');

    }

    return base * sign
};



var cc = "010";

console.log(myAtoi(cc));
