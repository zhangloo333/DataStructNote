/**
 * Created by lee on 2/28/17.
 *
 * reverse string: Given s = "hello", return "olleh".
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if(s == undefined) return s;
    var sarray = s.split("");
    var pt1 = 0;
    var pt2 = sarray.length-1;

    while (pt1<pt2) {
        var teamp = sarray[pt2];
        sarray[pt2] = sarray[pt1];
        sarray[pt1] = teamp;
        pt1++;
        pt2--;
    }
    return sarray.join("");
};