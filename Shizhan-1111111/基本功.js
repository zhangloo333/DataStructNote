/**
 * Created by lee on 9/16/17.
 */
var a  =1;

function test() {
    console.log(a);
    try{
        a(3);
        A();
    } catch(e) {
        a =2;
    }

    function a(b) {
        a =b;
    }
    console.log(++a);
}

test();
console.log(a);