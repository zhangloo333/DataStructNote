/**
 * Created by leizha on 2/8/17.
 */

// function covert(ss, nRows) {
//     if(ss == null || ss.length == 0){
//         return -1;
//     }
//     var storage = new Array(nRows);
//     var start = 0;
//     var end = ss.length;
//
//     while (start < end){
//         var temp = zigzig(start,end,ss);
//         temp.p
//     }
//
//
//
// }
//
function zigzig(start, end, array) {
    if(start > end){
        return;
    }
    var stroage = [];
    var count = 0;
    stroage[count++] = array[start++];
    end +=1;

    while(start <= end) {

        if(start == end){
            stroage[count++] = array[start];
            end--;
        }else {
            stroage[count++] = array[start++] + array[end--];
        }
    }
    return stroage;
}


var string = "PAYPALISHIRING";
console.log(string[100]);

var ccc = zigzig(0,4,string);
console.log(ccc);


// function zigzig(ss,nRows) {
//     var output ="";
//     var layer =[];
//     for(var i= 0; i < nRows; i++) {
//         layer[i] = nRows+1;
//     }
//
//     for(var i = 0; i < ss.length; i++) {
//         output += ss[0+(nRows)]
//     }
// }