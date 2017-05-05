/**
 * Created by leizha on 4/19/17.
 */

var wordB = function (ss,dict) {
    var n = ss.length;
    var f = new Array(n+1).fill(false);
        f[0] = true;
    console.log("initial array " + f);

            for(var i = 1; i <= n; i++) {
                for(var j = 0; j < i; j++) {
                    var word = s.substring(j,i);
                    f[i] = f[i] || f[j] && (dict.indexOf(word) == -1 ? false : true);
        }
    }
    console.log("last result " + f);

    return f[n];
}

var s = "leetcode";
var dict = ["leet","code"];

console.log(wordB(s,dict));