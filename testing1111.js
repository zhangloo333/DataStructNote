/**
 * Created by leizha on 12/12/16.
 */

//console.log(s);
//ss();
//
//
//var s = 5;
//
//var ss = function () {
//    console.log("hello word")
//}


// function a() {
//     function b() {
//         console.log("----" + myVar);
//     }
//     var myVar =2
//     b();
// }
//
// var myVar =1;
// a();


//function waitTreeseconds() {
//    var ms = 3000 + new Date().getTime();
//    console.log(new Date().getTime());
//    while(new Date() < ms) {
//        console.log('finshi function');
//    }
//}
//
//function clickHandler() {
//    console.log('click event');
//}

//listen for the click event
//document.addEventListener('click',clickHandler);

//waitTreeseconds();
//console.log('finished exexution');
//
//function great(){
//    console.log("abs");
//}
//great.language = "english";
//
//console.log(great);
var s1 = ['abc','asd','asdad'];
var s2 = ['abc','sddsd'];

function testing(array1,array2){
    var l1 = array1.length;
    var l2 = array2.length;
    var l = Math.max(l1,l2);
    console.log(l);

    for(var i = 0; i< array2.length; i++){
        var temp = array1.indexOf(array2[i])
        if(!temp){
            array1[temp]= array1[temp].split("").reverse().join("");
            console.log(temp + array1[temp]);
        }
    }

    return array1.join("");

}

console.log(testing(s1,s2));