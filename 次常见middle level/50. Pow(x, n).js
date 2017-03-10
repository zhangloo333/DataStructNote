/**
 * Created by leizha on 3/9/17.
 这一题不能用简单的方法，不断的循环来求出

 */
// 最笨的方法 不断的递归

var myPow = function(x, n) {
    //停止条件
    if(n  == 0) return 1;
    if(n  == 1) return x;

    /*迭代只迭代 变化的部分；
    3 * 3^4
        3 * 3^3
            3 * 3 ^ 2
                3 * 3 ^1
                停止条件 n =1 return x
    */

    return myPow(x,n--)*x;
}

//方法2，只用一个 power的方法；

var myPow = function(x, n) {
    if(n == 0) return 1;

    if(n<0){
        n = -n;
        x = 1/x;
    }
    return(n%2 == 0) ? Math.pow(x*x,parseInt(n/2)) : x*Math.pow(x*x,parseInt(n/2));
};