/**
 * Created by leizha on 2/17/17.
 * @param {string}
 * @return {string}
 */



var longestPalindrome = function(s) {
    if(s.length <= 1) return s;

    var ptr1 = 0;
    var ptr2 = s.length-1;

    while(ptr1 <= ptr2) {
        if(s[ptr1] != s[ptr2]){
            s = s.substring(ptr1+1,ptr2-1);
            ptr2 = s.length-1;
        } else {
            ptr1++;
            ptr2--
        }
    }
    return s;

};



var longestPalindrome = function(s) {
    if (s.length <= 1) return s;

    var IndexStack = [];
    var ptr1 = 0;
    var ptr2 = s.length-1;
    for(var i = 0; i < s.length; i++) {

        while(pr1 < )

    }

}

var input =  "cbbd";

console.log(longestPalindrome(input));