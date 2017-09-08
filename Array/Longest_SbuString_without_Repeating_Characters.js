/**
 * Created by lee on 9/1/17.
 */

function lengthOfLSubstring(s) {
    var freq = new Set();
    var l = 0, r = 0;
    var res = 0;

    while(l < s.length && r < s.length) {
        if(!freq.has(s[r])){
            freq.add(s[r]);
            r++
        } else {
            freq.delete(s[l]);
            l++;
        }

        res = Math.max(res,freq.size);
    }
    return res;
}

var t = 'bbbbb';
console.log(lengthOfLSubstring(t));

