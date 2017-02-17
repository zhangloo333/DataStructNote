/**
 * Created by lee on 2/15/17.
 @param {string} s
 @return {boolean}
 */

var isValid = function(s) {

    var checklist = [s[0]];
    //var top;
    var size = checklist.length;
    var top = size-1;
    console.log(size+"top"+top);

    for(var i = 1; i < s.length; ++i) {
        console.log(top);

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
            console.log("++++"+"i=" + i + top + size + checklist.length);

        } else {
            console.log("-----"+s[i] + top);
            checklist.push(s[i]);
            console.log(checklist);
            console.log("++++"+s[i] + top + size);

        }


    }
    console.log("++++"+"i=" + i+ s[i] + top + size);
    if(checklist.length === 0) return true;
    else return false;

};

var str ="()";
console.log(isValid(str));