/**
 * Created by lee on 8/23/17.
 */


function binarySearch(arr, target) {
    if(arr == null || arr == undefined || arr.length == 0) {
        return -1;
    }

    arr.sort(function (a,b) {
        return a-b;
    });

    console.log(arr);

    var Lboundar = 0;
    var Rboundar = arr.length-1;

    while(Lboundar <= Rboundar) {
        var mid = parseInt((Rboundar + Lboundar)/2);
        if(arr[mid] === target) {
            return true;
        } else if(arr[mid] < target) {
            Lboundar = mid + 1;
        } else {
            Rboundar = mid - 1;
        }
    }
    return false;
}

var a = [3,14,5,2,4,52,6];



function binarySearch2(arr, target) {

    var l = 0;
    var r = arr.length-1;
    var flag = false;
    arr.sort(function (a,b) {
        return a-b;
    });

    /**
     * 如果有return的情况，需要一层一层的向上return，return到最后一层函数，才可以，
         * function helper(arry,l1,r1) {
            if(l1 >= r1) return;
            var mid = parseInt((l1+r1)/2);
            if(arry[mid] == target){return ture}
            else if(arry[mid] < target) {
                helper(arry,mid+1,r1);
            } else {
                helper(arry,l1,mid-1);
            }
        }

     所以要不断地来更新内部的函数寄存器，最终输出；
     * */

    function helper(arry,l1,r1) {
        if(l1 >= r1) return;
        var mid = parseInt((l1+r1)/2);
        if(arry[mid] == target){flag = true}
        else if(arry[mid] < target) {
            helper(arry,mid+1,r1);
        } else {
            helper(arry,l1,mid-1);
        }
    }
    helper(arr,l,r);
    return flag
}
console.log(binarySearch2(a,3));