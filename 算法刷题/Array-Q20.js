/**
 * Created by leizha on 1/19/17.
 *
 * 读一串字符串把连续的分析出来，把平坦的分析出来。
 * 给个string 里面包括 大小写和数字， 给他们简化，
 *（1）如果连续就简化成“—>”  比如 1，2，3，4 简化成 “1—>4”
 * (2) 如果连续3个重复 就简化成“…” 比如“1，1，1…..”
 *
 * input string
 * out string
 * input assume:  没有空的数
 *
 * 数据结构 string inplace 操作
 * 时间复杂度：主要是 O(n)
 */

function optiString(input) {

    if (input == null || input.length == 0) {
        return "";
    }

    var output = input.charAt(0);
    var counter = 1; //只要是计数都是从1开始的。
    var marker = -1;
    var tile = -1;
    var pointer = 0;

    console.log(output);


    for (var i = 1; i < input.length; ++i) {

        if (str.charAt(i) - str.charAt(i - 1) == 1) {
            marker = 1;
            // tile = i;
        } else {
            if (str.charAt(i) - str.charAt(i - 1) == 0) {
                marker = 0;
                if (counter == 1) {
                    output += str.charAt(i - 1);
                }
                counter++;


            } else {
                if (marker == 0) {

                    if (counter == 3) {
                        output += "...";
                        counter = 1;
                    } else {
                        output += str.charAt(i - 1);
                    }

                    // output += str.charAt(i-1); // 应该是上一个数。
                    marker = -1;
                    counter = 0;

                }
                if (marker == 1) {
                    output += "-->"
                    // output += str.charAt(i);

                    output += str.charAt(i - 1); // 应该是上一个数。
                    marker = -1;
                    counter = 1;
                }
                // if(marker == -1){
                //     output += str.charAt(i);
                // }

                // output += str.charAt(i-1); // 应该是上一个数。
                // marker = -1;
                // counter = 0;

                // else {
                //     output += str.charAt(i);
                // }
            }
        }

        return output;
    }
}

var str = "123111456";
var out1 = optiString(str);

console.log(out1);
