/**
 * Created by lee on 2/15/17.

 给一个string判断这个括号是不是对称的；
 Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 determine if the input string is valid.

 The brackets must close in the correct order,
 "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

 这一题用stack做及其简单；
 就是看弹出是不是对称的
 记住如果 把 var top 写在外边是不会自动更新的。

 */


//var isValid = function(s) {
function isValid(s) {

    var checklist = [s[0]];
    var size = checklist.length;
    // var top = checklist.length-1; // 如果写在这里的话 top 不能更新，

    // console.log(checklist);

    for(var i = 1; i < s.length; ++i) {
        var top = checklist.length-1;
        
        if(s[i] === ")" || s[i] === "}" || s[i] === "]") {
            if(checklist[top] === "(" && s[i] === ")"){
                checklist.pop();
            } else if(checklist[top] === "[" && s[i] === "]"){
                checklist.pop();
            } else if(checklist[top] === "{" && s[i] === "}"){
                checklist.pop();
            } else {
                return false;
            }

        } else {
            checklist.push(s[i]);
            console.log(checklist);
        }
    }

    // if(checklist.length === 0) return true;
    // else return false;
  return (checklist.length === 0)? true : false;
};





var str ="([{[}])";
console.log(isValid(str));