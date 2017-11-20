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

 /*
 更简便的方法：
 note: 这里面是 有两个 lens
 lens1: array里面最大的数，你要循环这个多次；
 lens2：实际array里面的元素

 for loop 中, 如果 lens1 的 循环变量 == lens2的循环变量的话就，按循环而得打印，如果没有的情况下
 就按lens1的循环变量打印。
 */

function printStart(arr) {
    if (!arr || arr.length == 0) {
        console.log( "array is wrong");
    }

    arr.sort(function (a, b) {
        return a[0] - b[0];
    });
    var len = arr[arr.length-1][0];

    for(var i = 1, j=0 ; i <= len,j < arr.length; i++) {
        if( i == arr[j][0]){
            var temp = arr[j][0] + " " + "*".repeat(arr[j][1])
            console.log(temp);
            j++;
        } else {
            console.log(i);
        }
    }
}
var sample = [[2,4],[1,3],[4,2],[6,5]];
printStart(sample);


function printStart(array) {
    if(array == null && array.length == 0){
        console.log("array is wrong");
        return;
    }

        array.sort(function (a,b) {
        return a[0] - b[0];
    });


    var newArray = array;
    var tempStore;

    while(newArray.length != 0 ){
        var str = "";
        if(tempStore == undefined){
            tempStore = newArray[0][0];

            //print star 的部分
            str += array[0][0] + " ";
            for(var j = 0; j < array[0][0]; j++){
                str += "*";
            }
            console.log(str);

            //移出的部分
            newArray.shift();
        } else{
            //如果不是连续的话 直接打印
            if((tempStore+1) != newArray[0][0]){
                str += tempStore+1
                console.log(str);
            } else {
              // 如果是相等的情况下，按星星打印
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
