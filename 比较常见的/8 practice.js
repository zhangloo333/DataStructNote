/**
 * Created by leizha on 2/14/17.
 */


function atoi(str) {
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
        if(base > Number.MAX_VALUE/10 || base == Number.MAX_VALUE/10 && str[i] - "0" > 7) {
            if(sign == 1) {
                return 2147483647;
            } else {
                return -2147483648;
            }
        }
    }

    return base * sign
}


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
