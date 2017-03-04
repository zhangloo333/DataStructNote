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

        array.sort(function (a,b) {
        return a[0] - b[0];
    });


    // console.log(cc);

    // for(var i = 0 ; i < array.length; i++){
    //     var str = "";
    //     str += array[i][0] + " ";
    //
    //     for(var j = 0; j < array[i][0]; j++){
    //         str += "*";
    //     }
    //     console.log(str);
    // }

    var newArray = array;
    var tempStore;

    while(newArray.length != 0 ){
        // console.log(newArray);

        var str = "";

        if(tempStore == undefined){
            tempStore = newArray[0][0];
            str += array[0][0] + " ";
            for(var j = 0; j < array[0][0]; j++){
                str += "*";
            }
            console.log(str);
            newArray.shift();
            continue;
        } else{

            if((tempStore+1) != newArray[0][0]){
                str += tempStore+1
                console.log(str);
            } else {
                str += array[0][0] + " ";

                for(var j = 0; j < array[0][0]; j++){
                    str += "*";
                }
                console.log(str);
                newArray.shift();
            }
            tempStore = tempStore + 1;
        }
    }

}

var sample = [[2,4],[1,3],[4,2],[6,5]];

printStart(sample);
