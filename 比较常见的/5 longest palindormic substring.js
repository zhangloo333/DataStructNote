/**
 * Created by leizha on 2/17/17.
 * @param {string}
 * @return {string}

 给出一个string 找出最大的镜面 substring

 开始不是太会；

 */



// var longestPalindrome = function(s) {
//    var res ="";
//    var currLength = 0;
//
//    for(var i = 0; i < s.length; i++) {
//         if(isPalindome(s,i-currLength-1),i){
//             res = s.substring(i-currLength-1, i+1);
//             currLength = currLength + 2;
//         } else if(isPalindome(s,i-currLength,i)) {
//             res = s.substring(i-currLength, i+1);
//             currLength = currLength + 1;
//         }
//    }
//    return res;
// };
//
//
// function isPalindome(s,begin,end) {
//     if(begin <0) return false;
//     while(begin <end) {
//         if(s[begin++] != s[end--]){
//             return false
//         }
//     }
//     return true
//
// }
var maxLen =0;
var lo =0;

function longestP(s) {
    var len = s.length;
    if(len < 2) return s;

    for(var i = 0; i < len-1; i++){
        externdp(s,i,i);
        externdp(s,i,i+1);
    }
    return s.substring(lo,lo+maxLen);

}

function externdp(s,j,k) {
    while (j >= 0 && k < s.length && s.charAt(j) == s.charAt(k)){
        j--;
        k++;
    }
    if(maxLen < k - j -1) { //当maxlen 比 新的小的时候才重新的更新 lo 和 maxlen的值
        lo = j+1;// because j--, j already turned to j-1 这时候把它加回来；
        maxLen = k -j -1;
    }
}


// console.log(longestPalindrome("babad"));
console.log(longestP("cbbd"));