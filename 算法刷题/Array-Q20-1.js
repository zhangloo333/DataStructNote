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


    for(var i = 1; i < input.length; ++i) {

        if(input.charAt(i) - input.charAt(i-1) == 0) {
            marker == 0;
            counter++;
            if(counter == 3){
                output += input.charAt(h);
                output += "...";
                counter = 1;
            }

        } else if(input.charAt(i) - input.charAt(i-1) == 1) {
            marker = 1;
            ii = i;

        } else {

            if(marker == -1){
                output.charAt(i);
            }

            if(marker == 1){
                output += input.charAt(h) +"-->"+input.charAt(i-1);
                h = i;
                ii = i;
                marker = -1;
            }

            if(marker == 0){
                if(counter == 2){
                    output += input.charAt(i-1);
                    output += input.charAt(i-1);
                }
                if(counter == 3){
                    output += input.charAt(h);
                    output += "...";
                }

                if(counter == 1){
                    h = i;
                    marker = -1;
                }
            }


        }

    }


    return output;
}

var str = "1231114106";
var out1 = optiString(str);

console.log(out1);