/**
 * Created by leizha on 3/8/17.

 给出一个 number 让他直接转换成 string-是用character 表示的。
 首先明白怎么冲一个unicode ascii 码直接转换成 char行
 string.fromCharCode()

 是一个27进制转换 27的时候要末尾加0，进1；
 ABC = 1*26^2 + 2*26^1 + 3
 ZZ = 26*26^2 +26*26^1 +26

 A 开始于 65 ascii
 Z 于 90 ascii

 String.fromCharCode((n-1)%26 + 65)

 */


var convertToTitle = function(n) {
    if(n-1 <26){
        return String.fromCharCode((n-1)%26+65);
    }
    var result = "";

    while(n > 0){
        var codeNum = (n-1)%26;
        var c = String.fromCharCode(codeNum+65);
        console.log("c= " + c );
        result = c + result; // 这个控制了前后的位置；原来是现产生 最后一个位数，然后为什么现产生回在 后面的因为你是 把 新产生的数 + 后产生的数

        console.log("result= " + result);


        n = parseInt((n-1) / 26);
    }
    return  result;

};


//精简版本
var convertToTitle = function(n) {
    if(n < 26) return String.fromCharCode((n-1)%26 +65);

    var res = "";

    while(n > 0) {
        var codelow = String.fromCharCode((n-1)%26 + 65);
        res = codelow + res;
        n = parseInt((n-1)/26);
    }
    return res

};