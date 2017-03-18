/**
 * Created by leizha on 3/10/17.

 给出一个x，返回他的平方根；
 */

var mySqrt = function(x) {
    var start = 1,
        end = x,
        mid;

    if(x == 0) return 0;

    while(true) {
        mid = start + parseInt((end-start)/2);
        if(mid*mid > x) {
            end = mid-1;
        } else {
            if((mid+1)*(mid+1)>x) return mid;
            else start = mid + 1;
        }
    }
};


var mySqrt = function(x) {
    var start = 1,
        end = x,
        mid;

    if (x === 0) {
        return 0;
    }

    while (start + 1 < end) {
        mid = start + parseInt((end - start) / 2);

        if (mid * mid <= x) {
            start = mid;
        } else {
            end = mid;
        }
    }

    return start;
};