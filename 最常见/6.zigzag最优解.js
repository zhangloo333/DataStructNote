/**
 * Created by lee on 2/8/17.
 */

function zigziag(s, rnow) {

    if(rnow ==1) {
        return s;
    }
    var sBuctet = [];
    for(var i = 0; i < rnow; i++) {
        sBuctet[i] = "";
    }
    var increase = -1;
    var row = 0;
    var output ="";

    for(var i = 0; i < s.length; i++) {
        if(i%(rnow-1) == 0) {
            increase *= -1;
        }
        sBuctet[row] += s[i]+" ";
        row += increase;
    }

    for(var i=0; i <rnow; i++){
        output += sBuctet[i];
    }

    return output;
}

var string = "PAYPALISHIRING";
console.log(zigziag(string,3));