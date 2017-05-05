/**
 * @param {number[]} prices
 * @return {number}
 */

//最笨的方法
var maxProfit = function(prices) {
    if(prices.length <= 1) {
        return prices[0]
    }
    var len = prices.length;
    var result = 0;

    for(var i = 0 ; i < len; i++) {
        for(var j = i+1; j < len; j++) {
            var temp = prices[j] - prices[i];
            result = Math.max(temp,result);
        }
    }

    return result;
}

//两层循环，但是对1优化了
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }

    var buy = 0;
    var len = prices.length;
    var result = 0;


    while (buy < len-1) {
        if (prices[buy] > prices[buy + 1]) {
            buy++;
            continue;
        }

        for(var sale = buy+1; sale<len; sale++) {
            var temp = prices[sale] - prices[buy];
            result = Math.max(temp, result);

        }
        buy++;
    }

    return result;
}

var input = [0,6,-3,7];

console.log(maxProfit(input));

//一层循环；对每段进行分化。
var maxProfit2 = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }

    var maxCur = 0;
    var maxSoFar = 0;

    for(var i = 1; i < prices.length; i++) {
        maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
        maxSoFar = Math.max(maxCur,maxSoFar);
    }
    return maxSoFar;

}
console.log(maxProfit2(input));

//当前的数，减去前面最小的数；
var maxProfit3 = function (prices) {
    if (prices.length <= 1) {
        return 0;
    }

    var curMin = Number.MAX_VALUE;//千万不要写错
    var result = 0;

    for(var i = 0; i < prices.length; i++) {
        curMin = Math.min(curMin,prices[i]);
        result = Math.max(result,prices[i]-curMin);
    }
    return result;

}
console.log(maxProfit3([7,1,5,3,6,4]));
