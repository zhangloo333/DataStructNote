/**
 * Created by leizha on 5/17/17.
 */

var fibonacci = (function() {
    var memo = {};

    function f(n) {
        var value;
        // console.log(memo);

        if (n in memo) {
            value = memo[n];
        } else {
            if (n === 0 || n === 1)
                value = n;
            else
                value = f(n - 1) + f(n - 2);

            memo[n] = value;
        }

        return value;
    }

    return f;
})();

// var fff = fibonacci()

console.log(fibonacci(10))


var bar = 1;

function foo(baz) {
  return baz + bar;
}

console.log(foo(1));
bar++;
console.log(foo(1));

var fibonacci = function(n) {
    var value = 0;

    if(n == 0 || n ==1) {
        value = n;
    } else {
        value = fibonacci(n-1) + fibonacci(n-2);
    }

    return value;
}

console.log(fibonacci(10))

function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function() {
    var args = slice.call(arguments);

    if (args in memo)
      return memo[args];
    else
      return (memo[args] = func.apply(this, args));

  }
}

var fi =  memoize(fibonacci);
console.log(fi(10))
