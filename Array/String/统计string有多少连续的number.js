/**
 * Created by lee on 9/8/17.
 */
/**
 * Created by leizha on 7/13/17.
 *
 * 统计看看一个字符串中有多少个连续的字符；
 *
 *
 */


function getNumberString(str) {
    if(str.length == 0 || str == null) return str;

    var out = "";
    var count = 1;

    for(var i = 1; i < str.length; i++) {

        if(str.charAt(i) !== str.charAt(i-1)) {
            out += str.charAt(i-1);
            out += count;
            count = 1;
        } else {
            count++;
        }
    }

    out += str.charAt(str.length-1) + count;

    return out;
}

var input = "aabbaa";
console.log(getNumberString(input));