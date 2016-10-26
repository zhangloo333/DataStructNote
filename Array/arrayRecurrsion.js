/**
 * Created by leizha on 9/9/16.
 */

// var array = [1,2,3,4,5];
//
// array[i]
// console.log()

var str = "Hey there,\tthis is a very \"good\" example! Some say it's \"great.\"";
console.log(str);
var parse =/\w+/g;
var b= str.match(parse);
console.log(b);