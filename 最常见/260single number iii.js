/**
 * Created by leizha on 2/10/17.
 */


var singleNumber8 = function(arr) {
    if(arr.length <= 1) return arr[0];

    arr.sort(function (a,b) {
        return a-b;
    });

    var ptr1 = 0;
    var ptr2 = 1;
    var res = [];
    var counter = 0;
    // var distance = Math.abs(ptr2-ptr1); // 也可以把 这个自变量的等式写在上面

    while(ptr1 <= arr.length-1 && ptr2 <= arr.length-1){

        if(counter < 0){
            res.push(arr[ptr1]);

            counter = 0;
            ptr1++;
            ptr2 = ptr1+1;
        } else if(counter >=0 && counter <= 1){
            if(arr[ptr1] == arr[ptr2]){
                counter += 1;
                ptr1 += 2;
            } else if(arr[ptr1] != arr[ptr2]){
                counter -= 1;
                ptr2 += 2;
            }
            // if(Math.abs(ptr2-ptr1)>1){
            //     res.push(arr[ptr1]);
            // }
        } else {
            console.log("there are error");
        }
    }
    return res;
};

var testing = [1,2,1,3,2,5];
console.log(singleNumber8(testing));