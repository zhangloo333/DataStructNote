/**
 * Created by leizha on 2/16/17.
 @param {string[]} strs
 @return {string}

 corner case：array 的长度为 0 则返回""；

 这个题是 所有数组里面的元素都是 相同的字母，没有过一个例外。如果其中有一个元素，在
 这某个位上的元素不同于其他的元素，循环停止 弹出那么值。

 错误：
 Input: ["a","a","b"]
 Output: "a"
 Expected:""

 Input: ["aa","ab"]
 Output: "aa"
 Expected: "a"

 为什么有见面写法呢：

 如果我们 固定第一个数；这个element 可能有两种可能，
 element is the longest in this array || element is the smallest in the array

 if longest,我们通过不断的 缩小 范围来 找到最小的longest array
 if samllest， 那么最好，你不用缩小范围了。如果每个元素中都有这个，那么这个元素的长度就是最小的范围

 为什么不是if， 这个while主要是 再扫描第一个元素的时候，知道找到它和一个元素的共同元素为止，
 然后 这个pre就是一个范围， 他在和第二个元素比较，直到缩小到，找到和第二个元素未知。

 */


var longestCommonPrefix = function(strs) {
    var len = strs.length,
        len1,
        curChar,
        i,
        j;

    if (len === 0) {
        return '';
    }

    len1 = strs[0].length;
    for (i = 0; i < len1; i++) {
        curChar = strs[0].charAt(i);
        for (j = 1; j < len; j++) {
            if (strs[j].charAt(i) !== curChar) {
                return i === 0? '' : strs[0].substr(0, i);
            }

            if (strs[j].length === i) {
                return strs[j];
            }
        }
    }

    return strs[0];
};

//简便的写法
function longestCommandPre(strs) {
    if(strs.length == 0) return "";
    var pre = strs[0];
    // console.log("pre= " + pre);
    for(var i=1; i<strs.length;i++){
        while(strs[i].indexOf(pre) != 0){ //这个while主要是 再扫描第一个元素的时候，知道找到它和一个元素的共同元素为止，
            // console.log("++++  " + strs[i].indexOf(pre));
            // console.log("pre " + pre);
            pre = pre.substring(0,pre.length-1);
            // console.log("----  " + pre );
        }
    }
    return pre;
}

var testing = ["aertyuis","ab","abc","abcse"];
console.log(longestCommonPrefix(testing));
console.log(longestCommandPre(testing));