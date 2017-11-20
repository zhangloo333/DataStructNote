/**
 * Created by lee on 2/8/17.
 * zigzig: 是一道公式题；
 *
 * 判断放在哪个row里面: row[index]： index = i(字母在原来array里面的位置)
 * 公式1： n = rowNumber * 2 -2
 * 公式2： 2*rowNumber-2 - i%(2*rowNumber-2)；
 
 * 如果 i%n < row  arr[index = i%n] += s[i]
 * 如果 i%n >= row arr[index = n-i%n] += s[i]
 *
 * note:
 *  开始的是有 Array(row+1).fill("")
 */

function zigziag(s, row) {
    if(s == null) return "";
    if(row ==1) return s;

    var sBuctet = new Array(row+1).fill("");
    var n = 2*row - 2;
    var output = "";


    for(var i = 0; i < s.length; i++) {
       if(i%n < row){
           sBuctet[i%n] += s[i];
       } else {
           sBuctet[n-i%n] += s[i];
       }
    }

    for(var i = 0; i < row; i++) {
        output += sBuctet[i];
    }

    return output;
}

var string = "PAYPALISHIRING";
console.log(zigziag(string,3));

//比较麻烦的版本
function zigziag(s, rnow) {

    if(rnow ==1) {
        return s;
    }
    var sBuctet = [];

    for(var i = 0; i < rnow; i++) {
        sBuctet[i] = "";
    }
    var increase = -1;
    var row = 0;
    var output ="";

    for(var i = 0; i < s.length; i++) {
        if(i%(rnow-1) == 0) {
            increase *= -1;
        }
        sBuctet[row] += s[i]+" ";
        row += increase;
    }

    for(var i=0; i <rnow; i++){
        output += sBuctet[i];
    }

    return output;
}

var string = "PAYPALISHIRING";
console.log(zigziag(string,3));
