/**
 * Created by lee on 2/17/17.
 * @param {string}
 * @return {string}

 这题的难点是从 每一个点都可以是一个新的array

 怎么才叫对称; 从中间才是,向 两边展开.两边的元素 值是一样的.


 */

var longestPalindrome = function(s) {
    if(s.length <= 1) return s;

    var lo = 0;
    var maxlen = 0;

    for (var i = 0; i < s.length-1; i++) {
        extendParome(s,i,i);
        extendParome(s,i,i+1);
    }

    function extendParome(s,h,e) {
        while(h >=0 && e < s.length && s[h] == s[e]) {
            h--;
            e++;
        }

        if(maxlen < e-h-1) {
            lo = h + 1;//因为刚才减去了 h--, 现在 ++ 回来
            maxlen = e-h-1; //更新 maxlen
        }
    }

    return s.substring(lo, lo + maxlen);

};



//function extendParome(s,h,e) {
//    while(h >=0 && e < s.length && s[h] == s[e]) {
//        h--;
//        e++;
//    }
//
//    if(maxlen < e-h-1) {
//        lo = h + 1;
//        maxlen = e-h-1;
//    }
//}
