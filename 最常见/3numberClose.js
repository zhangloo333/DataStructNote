/**
 * Created by leizha on 2/9/17.
 * sum 题： 首先把 array 都给sort一遍
 * 1 sort array， 让他有单调性
 * 2 建立一个 储存输出的空间
 * 3 for循环来找出能够 不断的重复性
 *      index =0
        循环周期: array.lenth -2 index++
 *      sum 的结果由3个数决定： sum = ax + ay + az
 初始化的情况:
   ax = a[index];
   ay = a[index +1];
   az = a[length-1];

 随着 index的不断增长 范围要不断的缩小；
 sum = 0
 在一个循环中；
  有三种 情况
    ay + az = -ax;
    ay + az > -ax;
    就是想办法让 小范围的数减小 z--
    ay + az < -ax;
    小范围的数增加 y++

 循环结束：
 如果是 index与后面的数是相等的情况下。就直接跳出这层循环进入现层 contine
 重新给出 y = x + 1
 k = length -1

 知道循环结束输出 res；
 *
 */

// 最简单的写法
 function threeSume(arr,target) {

     arr.sort(function (a,b) {
         return a - b;
     });

     var res = Number.MAX_VALUE;
     var minDistance = Number.MAX_VALUE; //这个变量是全局如果写在for loop里面，当下一个有盖被重新赋值了

     for(var i = 0; i < arr.length -2; i++) {
         if(i > 0 && arr[i] == arr[i-1]) { // 这一点容易出错 i -1 而不是 i +1 因为是和她的前一个进行对比。
             continue;
         }

         var j = i + 1;
         var k = arr.length-1;
         var sum = target-arr[i];

         while(j < k){
             var tempMin = Math.abs(Math.abs(arr[j] + arr[k] + arr[i] - target));
             if(arr[j]+arr[k] == sum) {
                 return target;
             } else if(arr[j] + arr[k] > sum){
                 k--;
             } else {
                 j++;
             }
             
             if(tempMin < minDistance){
                 minDistance  = tempMin;
                 res = arr[j] + arr[k] + arr[i];
             }
         }
     }
     return res;

 }


// 比较全的写法
function threeSume(arr,target) {

    arr.sort(function (a,b) {
        return a - b;
    });

    var res = Number.MAX_VALUE;
    var minDistance = Number.MAX_VALUE; //这个变量是全局如果写在for loop里面，当下一个有盖被重新赋值了

    for(var i = 0; i < arr.length -2; i++) {
        if(i > 0 && arr[i] == arr[i-1]) { // 这一点容易出错 i -1 而不是 i +1 因为是和她的前一个进行对比。
            continue;
        }

        var j = i + 1;
        var k = arr.length-1;
        var sum = target-arr[i];

        while(j < k){
            var tempMin = Math.abs(Math.abs(arr[j] + arr[k] + arr[i] - target));
            // console.log("tempmin" + tempMin);
            // console.log("res = " + res);
            if(arr[j]+arr[k] == sum) {
                return target;
            } else if(arr[j] + arr[k] > sum){
                if(tempMin < minDistance){
                    minDistance  = tempMin;
                    res = arr[j] + arr[k] + arr[i];
                }
                k--;
            } else {
                if(tempMin < minDistance){
                    minDistance  = tempMin;
                    res = arr[j] + arr[k] + arr[i];
                }
                j++;
            }
        }
    }
    return res;

}

var nums = [1,1,1,0];

var numSort =[ -4, -1, -1, 0, 1, 2 ];

console.log(threeSume(nums,-1000));
