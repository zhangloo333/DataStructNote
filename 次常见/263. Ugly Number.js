/**
 * Created by leizha on 2/28/17.
数学问题：数学问题总是有整除 ／ 和取余数 %
 能被 2，3，5整除的数就可以。


 */


/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    for(p of [2,3,5]) {
        while(num && num % p == 0){
            num /= p;
        }
    }
    return num == 1;
    // while(num && num%)
};

console.log(isUgly(14));