/**
 * Created by leizha on 3/2/17.

 最简单的判断回文的方法：
 两个pointer 同时往一个方向move，如果有一个不相等的话return false，
 如果两个pointer相遇了。 都相等，返回ture

 首先把字串轉為全小寫
 將字串裡面不是字母與數字的部分去除

 然后for loop 两个指针；

 判断回文方法：

 "A man, a plan, a canal: Panama" is a palindrome.
 "race a car" is not a palindrome.

 reverse之后你能不能相等；
 two pointer

 */

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/ig,"");
    var i =0;
    var j =s.length-1;
    while(i<j){
        if(s[i] != s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;

};

var s ="A man, a plan, a canal: Panama";
console.log(isPalindrome(s));