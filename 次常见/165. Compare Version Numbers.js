/**
 * Created by leizha on 3/8/17.

 给中两个字符串的version比较他们谁大
 "1.0"
 "1"
 0

 "1.1"
 "1.10"
 -1

 解题的思路： 判断 .左边 和 右边的大小，如果区分后右边没有的情况下，补领操作

 I checked other Java solution and the basic idea is the same.
 In addition, I simply the logic by making the two version number same length.
 For example, if version1 = "1.0.2", and version2 = "1.0", the I will convert the version2 to "1.0.0".

 1.首先去除 "." 然后做比较；
 2.取较长的 string做loop的循环；
 3。把len较小的那一个，末尾取0做处理，然后比较当前位的大小。


 */

var compareVersion = function(version1, version2) {
    // 將版本號用小數點切開
    var array1 = version1.split(".");
    var array2 = version2.split(".");

    console.log("array1 = " + array1);
    console.log("array2 = " + array2);

    // 取版本號較長的跑loop
    var max = array1.length > array2.length ? array1.length:array2.length ;

    console.log(max);

    for(var i = 0 ; i < max ; i++ ){
        var i1 = parseInt(array1[i]);
        var i2 = parseInt(array2[i]);

        console.log("i1= " + i1 + " i2= " + i2);
        // 如果其中一邊後面已經沒版本號，後面就設為0
        // ex.  [1.0.1], [1.0] 轉換成 [1.0.1], [1.0.0]作比對

        i1 = array1.length < i+1 ? 0 : i1;
        i2 = array2.length < i+1 ? 0 : i2;

        console.log("i1= " + i1 + " i2= " + i2);


        // 如果相同位置的版號數字不一樣，就可以判斷哪個版號大
        // ex. 1.1.5 < 1.2.2，因為在第二個位置時 2>1 就可以得到答案
        if(i1 > i2){
            return 1;
        }
        if(i2 > i1){
            return -1;
        }
    }
    return 0;
};

console.log(compareVersion("1.0","1"));