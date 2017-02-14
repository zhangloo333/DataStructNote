/**
 * Created by leizha on 2/10/17.

 其实这个题就是：就是，如果只有这一个数于其他不同，他么他肯定 既不和左边的数相同，也不和右边的数仙童
 arr[i] != arr[i-1] && arr[i] != arr[i+1]

 */


var singleNumber8 = function(arr) {
    if(arr.length <= 1) return arr[0];

    arr.sort(function (a,b) {
        return a-b;
    });

    var ptr = 0;
    var res = [];
    var counter = 0;
    // var distance = Math.abs(ptr2-ptr1); // 也可以把 这个自变量的等式写在上面

    for(var i = 0; i < arr.length; i++){
        if(arr[i] != arr[i-1] && arr[i] != arr[i+1]){
            res.push(arr[i]);
        }
    }
    return res.pop();
};

var testing = [1,2,1,3,2,5];
console.log(singleNumber8(testing));