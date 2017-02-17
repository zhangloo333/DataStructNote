/**
 * Created by leizha on 2/14/17.
 * 怎么把一个string number 转换成integer.
 * 其实有没有现成parseInt 这个指令可以把任何的 string的数转化成
     var a ="   -12345   ";
     console.log(parseInt(a));

 1.input: string
 2.output: number
 3.corner case:
  1)当底数大于最大的最大的数字Number.MAX_VALUE 和小于 最小的数字 Number.MIN_VALUE的时候
  2)一旦有数字中间不满足条件的情况下,直接跳出循环的 用while()设置跳出的条件,
    for不能当条件不满足的时候跳出循环. for 只能是对既定路线的循环.
    while(str[i] >= "0" && str[i] <= "9") 当数子中有字母的情况下,就要跳出循环. 用for不好

    判断是否超出了最大的限制,注意要保证最后一次循环能够发生.

    怎么保证 每一位不断地 升级呢, 求一次结果升一下级*10;然后通过自变量++的改变让 while循环继续.
    base  = 10 * base + (str[i++] - '0');
 *
 */



var myAtoi = function(str) {
    var sign = 1;
    var base = 0;
    var i = 0;
    while(str[i] == " "){
        i++;
    }
    if(str[i] == "-" || str[i] == "+") {
        sign = 1- 2*(str[i++] == "-");
    }

    while(str[i] >= "0" && str[i] <= "9") {
        if(base > 214748364 || base == 214748364 && str[i] - "0" > 7) {
            if(sign == 1) {
                return 2147483647;
            } else {
                return -2147483648;
            }
        }

        base  = 10 * base + (str[i++] - '0');

    }

    return base * sign
};


//下面没有成功主要是,没有把每一部分分的开,想用一个for循环就解决掉所有的问题.

// var myAtoi = function(num) {
//     num = num.trim();
//     var len = num.length;
//     var res = 0;
//     var sign = 1;
//     var counter = 0;
//
//     for(var i =0; i<len; i++){
//         if(counter>1) return 0;
//
//         if(num[i] == "-" || num[i] == "+") {
//             num[i] == "-" ? sign *= -1 : sign;
//             counter++;
//             continue;
//         }
//
//         if(Number.MAX_VALUE > res || Number.MIN_VALUE < res) {
//             if(num[i]>= "0" && num[i] <= "9") {
//                 res = res *10 + (num[i] - "0");
//             } else{
//                 return sign*res;
//             }
//         } else {
//             if(sign <0){
//                 return -2147483647
//
//             } else {
//                 return 2147483647
//
//             }
//         }
//     }
//     return sign*res;
// };
