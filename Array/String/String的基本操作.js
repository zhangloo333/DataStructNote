/**
 * Created by leizha on 12/9/16.
 */

function pt(data) {
    console.log(data);
}

var a1 = ['a','b','c','d'];
pt(a1.join());
pt(a1.join(""));// 去除上一个层次的逗号


//来确认一个 str里面是否有这个数的存在
var str = "+-*/";
if(str.indexOf("5") != -1) {
    console.log("11")
}
