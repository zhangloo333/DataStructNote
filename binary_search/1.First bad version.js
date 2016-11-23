/**
 * Created by leizha on 11/22/16.
 */
/**
 * 本题是binary search 的一个模版用此模版做以后所有 binary search 的题
 * 给出一个array，如果数组中有一个元素在调用了 api 后返回的是 bad version 那么她之后所有的 version 都是bad version
 * 找出第一个出现bad version的点。
 * 二分法的关键是：
 *  1.如果舍弃另一办无用的点。
 *  2.和什么时候停止查找。
 *  3.停止都该怎么办。
 *
 *  取middle的时候一定要记住只取整数；
 *
 *
 * */

function findBadverion(array) {
    if(array.length == 0 || array == null){
        return -1;
    }

    var start = 0;
    var end = array.length-1;

    while (start < end-1) {
        var mid = Math.trunc(start +(end - start)/2);
        if(!isBadVersion(array[mid])){
            start = mid;
        } else {
            end = mid;
        }

    }
    return isBadVersion(array[start]) ? start : end;

}

function isBadVersion(input) {
    return input == 0 ? false:true;
}

function print(data) {
    console.log(data);
}

var trueflasetable = [0,0,0,0,0,0,1,1,1,1,1];

for(var i =0; i < trueflasetable.length-1; i++) {
    console.log(isBadVersion(trueflasetable[i]));
}
print('************');
print(findBadverion(trueflasetable));