
function calc(expr) {
var arr = expr.split(" ");
var stack = [];
var result = 0;
for(var i=0;i<arr.length;i++){
    if(!isNaN(arr[i])){
        stack.push(arr[i]);
    }
    else{
        var opr1 = parseInt(stack.pop());
        var opr2 = parseInt(stack.pop());
        switch(arr[i]){
            case "+" :
                stack.push(opr1 + opr2);
                break;
            case "-" :
                stack.push(opr2 - opr1);
                break;
            case "*" :
                stack.push(opr1 * opr2);
                break;
            case "/" :
                stack.push(opr2 / opr1);
                break;
            default :
                throw new Error("UnSupportHandle");
        }
    }
}
result = stack.length == 1 ? stack.pop() : Math.max.apply(Math,stack);
return result ? result : 0;
}
