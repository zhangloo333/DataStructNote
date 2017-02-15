/**
 * Created by leizha on 2/14/17.
 */

var hammingWeight = function(num) {
    if(num > Number.MAX_VALUE || num < Number.MIN_VALUE) {
        return -1;
    }
    var res = 0;

    while(num >0) {
        if((num & 1) == 1){
            res++;
        }
        num >>>= 1;
    }

    return res;
};