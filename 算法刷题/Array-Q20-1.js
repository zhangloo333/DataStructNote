/**
 * Created by leizha on 1/19/17.
 *
 */


function optiString(input) {

    if (input == null || input.length == 0) {
        return "";
    }

    var output = "";

    var h = 0;
    var marker = -1;
    var counter = 1; //只要是计数都是从1开始的。
    var ii = 0;


    for(var i = 1; i <= input.length; i++) {
        var result = input.charCodeAt(i) - input.charCodeAt(i-1);

        if( result == 0) {
            if(marker == 1){
                output += input.charAt(h) +"-->"+input.charAt(i-1)+" ";
                h = i;
                ii = i;
            }

            marker = 0;
            counter++;



            // if(counter == 3){
            //     output += input.charAt(h);
            //     output += "...";
            //
            //     h = i+1;
            //     counter = 1;
            //     marker = -1;
            //     ii= i;
            // }

        } else if(result == 1) {
            marker = 1;
            ii = i;

        } else {
            if(marker == -1){
                // output.charAt(i);// 应为没有输出啊了
                output += input.charAt(h);
                output += input.charAt(i);
            }

            if(marker == 1){
                output += input.charAt(h) +"-->"+input.charAt(i-1)+" ";
                h = i;
                ii = i;
                marker = -1;
            }

            if(marker == 0){
                // if(counter == 2){
                //     output += input.charAt(i-1);
                //     output += input.charAt(i-1);
                //     output += input.charAt(i);
                //     // h = i;
                //     counter = 1;
                //     marker = -1;
                //
                // }

                var inter = Math.floor(counter/3);
                var rest = counter%3;

                // console.log("inter....."+inter);
                // console.log("rest....."+rest);

                for(var id = 0; id <inter; id++){
                    output += input.charAt(h)
                    output += "..."+" ";
                }
                for(var jd = 0; jd < rest; jd++){
                    output += input.charAt(h);
                }
                counter = 1;
                h = i;
                // console.log(h);
                marker = -1;
            }
        }

    }


    return output;
}

var str = "123456666666232455766";
var str = "123456 666 666 23 24 55 7 66";
var out1 = optiString(str);

console.log(out1);

console.log('A'.charCodeAt(0) - 'B'.charCodeAt(0));