/**
 * Created by leizha on 1/12/17.
 * 打星星
 *1) Given an array of integer arrays (2D array), each element has an array of two elements: key and value. From one until the largest key, print "<int name> " + "*" as many times as the value.

 For example, [2,4] will print out "2 ****".
 A given 2D array could be: [[2,4], [1,3], [4,2]]
 Expected output is:
 1 ***
 2 ****
 3
 4 **
 */

function printStart(array) {
    if(array == null && array.length == 0){
        console.log("array is wrong");
        return;
    }

    var cc = array.sort(function (a,b) {
        return a[0] - b[0];
    });

    console.log(cc);

    for(var i = 0 ; i < array.length; i++){
        var str = "";
        str += array[i][0] + " ";
        if(array[i][0] != undefined){
            for(var j = 0 ; j < array[i][0]; i++){
                str += "*";
            }
            console.log(str);
        }
    }
}

var sample = [[2,4],[1,3],[4,2]];

printStart(sample);
