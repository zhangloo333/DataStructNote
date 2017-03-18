/**
 * Created by leizha on 3/10/17.
 Reverse Polish Notation.
 其实还应该加入很多检查，比如pop之前检查stack是否为空， parseInt之前检查是否可以被parse

 */

var evalRPN = function(tokens) {
    var calStrack = [];
    var str ="+-*/";

    for(var e of tokens) {
        if(str.indexOf(e) == -1) {
            calStrack.push(e);
            continue;
        }

        var a = parseInt(calStrack.pop());
        var b = parseInt(calStrack.pop());

        //because e is string, but "+-*/" cannot use in operation

        if(e === "+"){
            calStrack.push(a+b);
        } else if(e ==="-") {
            calStrack.push(a-b);
        } else if(e === "*"){
            calStrack.push(a*b);
        } else {
            calStrack.push(a/b);
        }
    }

    calStrack.pop();
};

var a = ["0","3","/"]