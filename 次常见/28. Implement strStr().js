/**
 * Created by leizha on 3/1/17.

 这一题主要是说： 给出两个 string的串，str1 = haystack
 str2 = needle；

 如果needle这个串在 是否在 haystack 这个字符串里面，是的话就 output 它的index
 如果找不到的话就输出-1；

 这一题讲的是kmp窗口滑动的问题：

 */

//暴力解法；

var strStr = function(haystack, needle) {
    var m = haystack.length;
    var n = needle.length;

    if(!n) return 0;

    for(var i = 0; i<= m-n; i++){
        var j =0;
        while(j<n){
            if(haystack[i+j] != needle[j]) {
                break;
            }
            j++;
        }
        if(j == n) return i;
    }
    return -1;

};