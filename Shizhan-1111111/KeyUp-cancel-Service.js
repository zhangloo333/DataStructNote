/**
 * Created by lee on 10/6/17.
 */

function X(fn, delay) {
    // YOUR CODE HERE!!!
    var timer = 0;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn.bind(this, arguments),delay);
    }
}

function doSomething(msg) {
    console.log(msg);
}

var handler = X(doSomething, 500);

handler("h");
handler("he");
handler("hel");
handler("hell");
handler("hello");

// call handler() 1000ms later after last call.
setTimeout(function () {
    handler("again");
}, 1000);
