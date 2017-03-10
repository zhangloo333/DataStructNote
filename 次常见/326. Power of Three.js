/**
 * Created by leizha on 3/8/17.

 数字问题要考虑边界
 */

var isPowerOfThree = function(n) {
    if(n <= 0) return false;
    if(n == 1) return true;

    while(n > 3) {
        if(n%3 != 0) return false;
        n = parseInt(n/3);
    }

    return n%3 == 0;
};