/**
 * Created by lee on 1/10/17.
 *
     Given a string A and a string B, reverse words in A that are not in B. Maintain original word order of A.
     Example:
     A = "the receptionist was hot"
     B = "receptionist was"
     Output: "eht receptionist was toh"

 解题步骤:
   1. 判断 空字符串, 如果sting1 or string2 有一个为空. 则原样输出 string

   2. 如果都不为空 首先把 string2 分段: 分成一个一个的小数组.

   3. 遍历数组 来看对应 string1 里面是不是含有 string2 对应的字符串.

   4. 如果有 就把对应的小段string 在分段,reverse

   5. 最后把1重新拼接起来,以空格隔开

 *
 *
 */


//方法1: reverse 两遍
function reverseWord(str1, str2) {
    if(str1 == null || str1 == null || str1.length == 0 ||str2.length == 0) {
        return str1;
    }

    var arry1 = str1.split(" ");
    var arry2 = str2.split(" ");
    console.log(arry1);
    console.log(arry2);

    for(var i = 0 ; i < arry2.length; i++) {
        var temp = arry1.indexOf(arry2[i]);
        if(temp != -1) {
            arry1[temp] = arry1[temp].split("").reverse().join("");
        }
    }

    var ss = arry1.join(" ");
    ss=ss.split("").reverse().join("");
    console.log(ss);
    return ss;

}


//reverse 一遍

function reverseWord2(str1, str2) {
    if(str1 == null || str1 == null || str1.length == 0 ||str2.length == 0) {
        return str1;
    }

    var arry1 = str1.split(" ");
    var arry2 = str2.split(" ");
    console.log(arry1);
    console.log(arry2);

    for(var i = 0 ; i < arry1.length; i++) {
        var temp = arry2.indexOf(arry1[i]);
        if(temp == -1) {
            arry1[i] = arry1[i].split("").reverse().join("");
        }
    }

    return arry1.join(" ");

}


var s1 = "the receptionist was hot";
var s2 = "receptionist was";

console.log(reverseWord2(s1,s2));