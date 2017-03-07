/**
 * Created by leizha on 3/2/17.
 给出2进制形式的string 让他返回一个2进制的加法；
     a = "11"
     b = "1"
     Return "100".

 为操作 必须有 charCodeAt(index)
 conern case: 空就直接返回

 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(!a || !b) return "";

    var al = a.length-1;
    var bl = b.length-1;
    // var tempa = parseInt(a);
    // var tempb = parseInt(b);
    var res = "" ;
    var carry = 0;

    while (al >=0 || bl >=0) {
        var sum = carry;
        if(al>=0){
            sum += a.charCodeAt(al--) - "0".charCodeAt(0);
        }
        if(bl>=0){
            sum += b.charCodeAt(bl--) - "0".charCodeAt(0);
        }
         res = res + sum%2;
        carry = Math.floor(sum/2); //这里是carry而不是
    }

    return (carry == 0) ? res.split("").reverse().join("") : (res+carry).split("").reverse().join("");
};

var a = "11";
var b = "1";

console.log(addBinary(a,b))