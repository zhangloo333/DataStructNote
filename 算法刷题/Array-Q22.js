/**
 * Created by leizha on 1/11/17.\
 *
 * 我的其中一张借记卡卡号为
 //    6  2  2  8  4  8  0  2  1  0  7  1  4  1  0  3  3  1  9
 //    其中从右至左偶数位依次是
 //    1  3  1  1  0  2  8  8  2
 //    乘以2求和
 //    2+6+2+2+0+4+1+6+1+6+4=34 （8*2=16 按1+6计算）
 //    奇数位求和
 //    9+3+0+4+7+1+0+4+2+6=36
 //    最后
 //    36+34=70
 //    正好是10的7倍，符合Luhn算法，因此这是一个正确的卡号
 */

function validateCcard(snumber){
    if(snumber == null || snumber.length == 0|| snumber.trim().length <13 || snumber.trim().length >19) {
        return false;
    }

    var sumEven = 0;
    var sumOdd = 0;

    for(var i = snumber.length; i > 0; i--) {
        var temp = snumber.charAt(i-1) - '0';

        if((i-1)%2 != 0) {
            temp *= 2;
                while (temp != 0){
                    sumEven += temp % 10;
                    temp = Math.floor(temp/10);
                }
        }else {
            sumOdd += temp;
        }
    }


    // if((sumEven+sumOdd)%10){
    //     return true;
    // } else {
    //     return false;
    // }

    console.log(sumEven + "so" + sumOdd + "tsum");
    return (sumEven+sumOdd)%10 == 0;
}

var number = '6228480210714103319';
var out = validateCcard(number);
console.log(out);

var num = 2+4+6+8+2+4+6+0;
var num1 = 3+1+5+7+1+3+5+7;

console.log(num + "asd" + num1);