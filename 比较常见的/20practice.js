/**
 * Created by lee on 2/15/17.
 */


//var isValid = function(s) {
function isValid(s) {

    var checklist = [];
    //var top;
    var size = checklist.length;
    var top = checklist.length-1;

    console.log('sizes= '+size+" top= "+top);
    console.log(checklist);

    for(var i = 1; i < s.length; ++i) {
        console.log('sizes= '+size+" top= "+top);

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