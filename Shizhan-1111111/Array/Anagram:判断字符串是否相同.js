/**
 * Created by lee on 9/23/17.
 * @param {string} s, t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
    var slen = s.length;
    var tlen = t.length;

    if(slen !== tlen) return false;

    var hash = {};

    for(var i = 0; i < slen; i ++) {
        var char = s[i];
        hash[char] = hash[char] || 0;
        hash[char]++;
    }

    for(var i = 0; i < tlen; i++) {
        char = t[i];
        if(hash[char] == undefined || hash[char] ===0){
            return false;
        }
        hash[char]--;
    }
    return true;
}

