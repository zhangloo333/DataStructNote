/**
 * Created by leizha on 2/28/17.

 什么是valid anagram 主要就是 两个字符串都是由 相同的字母构成，不过他们颠倒了顺序；

 两种方法来判断，第一种排序后，这两个单词应该是一样的结果。

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s,t) {
    if(s == undefined || t == undefined){
        return false;
    }
    if(s.length != t.length) return false;

    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    if( s != t) {
        return false;
    };

    return true;
};

var isAnagramMap = function(s,t) {
    if(s == undefined || t == undefined){
        return false;
    }
    if(s.length != t.length) return false;

    var alphMap = new Array(26).fill(0);

    for(var i = 0; i < s.length; i++){
        console.log('b'.charCodeAt(0) - 'a'.charCodeAt(0));
        console.log("here  " + alphMap[s[i]-'a']);
        alphMap[s.charAt(i)-'a']++;
        console.log(alphMap[s.charAt(i)-'a']);

    }
    for(var j = 0; j < s.length; j++){
        alphMap[s.charAt(j)-'a']--;
    }

    console.log(alphMap);
    for(var c of alphMap) {
        if(c != 0) {
            return false;
        }
    }
    return true;
}



var s ="a";
var t ="b";

console.log(isAnagramMap(s,t));