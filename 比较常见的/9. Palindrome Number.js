/**
 * Created by lee on 2/16/17.
 what is palindrome number
就是镜面文字,如果reverse之后还和原来是一样的就是palindrome
 input: 一个number
 output: true/false

 corner case: integer 负数;
 如果reverse integer 的情况下: 需要 额外的空间开支;


 解题关键:怎么再一次循环中能 同时定位到 个位 和 最高位;
 个位 = 整个整数 % 10;

 最高位 = 整个数 / 10 (整个数.length -1)次方
        10(整个数.length -1)次方 怎么用循环表示

        先设一个 base =1
        while(这个数/base >10) 就结束循环,如果<10 不断循环
        base * 10
        当最高位的时候 这个数/base 一定是<10,停止 base 就一定停在 base = 10(整个数.length -1)次方


 那怎么同时 缩小最高位 和 最低位

 缩小最低位 = number/10;
 缩小最高位呢 number/ 10.power(number.length-1)

 同时缩小10.power(number.lenght-1)的个数,因为同时缩小了两个单位

第二种方法是利用 integer reverse 后应该和 原来的数是一致的,所以判读是不是回文
 number == reverse(number)

 怎么reverse, 先求出 res = res*10 + number%10

 res*10 是每次乘以10, number需要不断地减少1位,所以每次是/10的
 循环什么时候结束, number 缩小到0 一下结束;
 如果对比 相等时不用循环到 缩小到0一下 一旦两个 number 不大于 res之后,就听停止了,应为是镜面的
 所以 在偶数的情况下是相等的; 但是在奇数,因为是 res 比 number 多一个 位; 则需要res缩小一位才能和number 做
 比较;

 */

function isPalindorme(n) {
    if(n<0) return false;
    var base = 1;

    while(Math.floor(n/base) >=10){
        base *= 10;
    }

    while(n){
        if(Math.floor(n/base) != n%10) return false;
        n = Math.floor((n%base)/10);
        base = Math.floor(base/100);
    }

    return true;
}

//这个是为什么 第一个不能成立
var isPalindorme2 = function (n) {
    if(n<0) return false;
    while(n) {
        // var base = Math.pow(10,n.length-1);// 数字是没有位数的所以不能用length-1
        //所以只能用一下的 只能不断的除以十，看他到底有几个十：
        while(Math.floor(n/base) >=10){
            base *= 10;
        }

        console.log(base);
        if(Math.floor(n/base) != n%10) return false;
        n = Math.floor((n%base)/10); // n%base 舍最好位  （n%base）／10舍去最低位
    }
    return true;
}


var isPalindorme1 = function(n) {
    if(n<0 || (n!=0 && n%10 == 0)) return false;
    var res = 0;

    while(n > res) {
        res = res*10 + n%10;
        n = Math.floor(n/10);
    }

    return (n == res || n == Math.floor(res/10));
};

var int =1221

console.log(isPalindorme2(int));