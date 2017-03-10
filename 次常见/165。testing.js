/**
 * Created by leizha on 3/8/17.
 */

var compareVersion = function(version1, version2) {
    var a1 = version1.split(".");
    var a2 = version2.split(".");

    var max = a1 >= a2 ? a1.length : a2.length;

    for(var i = 0; i < max; i++) {

        var e1 = parseInt(a1[i]);
        var e2 = parseInt(a2[i]);

        e1 = a1.length < i+1 ? 0 : e1;
        e2 = a2.length < i+1 ? 0 : e2;

        if(e1 < e2) {
            return 1
        } else if(e1 > e2) {
            return -1
        }
    }
    return 0;


}