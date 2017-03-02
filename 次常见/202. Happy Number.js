/**
 * Created by leizha on 3/1/17.
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // var mapping = new Set([n]);
    // var sum = getSum(n);

    // while(sum != 1){
    //     if(mapping.has(sum)){
    //         return false;
    //     } else{
    //         if(sum ==1){
    //             return true;
    //         }else{
    //             mapping.add(sum);
    //             sum=getSum(sum);
    //         }
    //     }
    // }
    // return true;

    //简化版本
    var mapping = new Set();
    while (!mapping.has(n)){
        mapping.add(n);
        n = getSum(n);
        if(n == 1){return true;}
    }
    return false;
};


function getSum(n) {
    var sum = 0;
    while (n>0) {
        var temp = n%10;

        // temp *= temp;
        // sum += temp;
        // 化简
        sum += temp*temp;

        n = Math.floor(n/10);
    }
 return sum;
}

console.log(isHappy(19));
console.log(getSum(1));