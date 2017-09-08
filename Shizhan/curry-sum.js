/**
 * Created by lee on 9/7/17.
 *
 * curry 应该注意一下几点：
 *  1.首先要不 所有的 arrguments 都装入 一个容器里面；
 *  2. 如果arguments里面的没有 输入的argument了，你就把所有里面的argument 用apply传入现在的函数执行
 *
 *  3. 怎么把所有普的参数 都放入 这个容器；[].push.apply(_arg,[].slice.call(arguments);
 *
 *  普通写函数的时候就需要把 把所有的 函数储存在 arguments；
 *
 */

var curring = function (fn) {
    var _arg = [];

    return function () {
        if(arguments.length == 0){
             return fn.apply(this,_arg);
        }

        [].push.apply(_arg, [].slice.call(arguments));
        return arguments.callee;
    }
}

var sum = function () {
    var sum = 0;

    for(var i = 0, e ; i < arguments.length; i++) {
                e = arguments[i];
                sum += e;
    }

    // for(e of arguments){
    //     sum += e;
    // }
    return sum;
}

var sum1 = curring(sum);

console.log(sum1(1)(2)(3)(4)());
