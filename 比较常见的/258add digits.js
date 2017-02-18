/**
 * Created by leizha on 2/17/17.
 * @param {number} num
 * @return {number}
 */


var addDigits = function(num) {
    if(num < 10) return num%10;//这里是小于10

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