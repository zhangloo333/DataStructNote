/**
 * Created by leizha on 3/8/17.

 判断是否为某个数的 power；
 如果是2 的power的情况下，一定是2的倍数；

 */

var isPowerOfTwo = function(n) {
    if(n <=0) return false;
    if(n == 1) return true;

    while(n>3){
        if(n%2 != 0) return false;
        n = parseInt(n/2);
    }
    return ture;
};