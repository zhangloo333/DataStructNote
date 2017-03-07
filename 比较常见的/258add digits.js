/**
 * Created by leizha on 2/17/17.
 * @param {number} num
 * @return {number}
 给出一个数字，知道add到一个数字的时候返回；

 Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.



 */


var addDigits = function(num) {
    if(num < 10) return num%10;//这里是小于10 为什么不直接返回 num呢，也可以num%10 可以对10进行处理

    while(num >= 10){ //这里是大于等于10
        num = innerloop(num);
    }
    return num;
};

function innerloop(num) {
    var newnum = 0;

    while(num){
        newnum = newnum + num%10;
        num = Math.floor(num/10);
    }
    return newnum;
}

//这个题涉及到 digital root 有一个公式  last = 1 + （n-1）%9


var a =388888;


console.log(addDigits(a));
console.log(innerloop(a));