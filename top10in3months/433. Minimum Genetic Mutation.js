/**
 * Created by leizha on 1/31/17.
 这个题是关于 BFS 的题，是关于图的题，需要先把图学好再来进行这个。
 */

function minMutation(start, end, bank) {
    if (start == null || end == null || start.length != end.length) {
        return -1;
    }

    var bankSet = new Set(bank);

    if (!bankSet.has(end)) {
        return -1;
    }

    var q = [];
    q.unshift(start);
    q.unshift("#");
    var che = end.split("");
    var level = 0;
    var min = Math.MAX_VALUE;
    var genes = ['A', 'C', 'G', 'T'];

    while (!(q.length == 0)) {
        var temp = q.shift();
        if (temp == "#") {
            level++;
            if (!(q.length == 0)) {
                q.unshift("#");
            }
        } else if (temp == end) {
            min = Math.min(min, level);
        } else {
            var chs = temp.split("");
            for (var i = 0; i < chs.length; i++) {
                if (chs[i] != che[i]) {
                    var c = chs[i];
                    genes.map(function(x) {
                        if (x != c) {
                            chs[i] = x;
                            var ns = chs[i].join("");
                            if (bankSet.has(ns)) {
                                q.shift(ns);
                            }
                        }
                    });
                    chs[i] = c;
                }
            }
        }

    }

    return min == Math.MAX_VALUE ? -1 : min;

}

var start = "AAAAACCC";
var end = "AACCCCCC";
var bank = ["AAAACCCC", "AAACCCCC", "AACCCCCC"];

console.log(minMutation(start, end, bank));