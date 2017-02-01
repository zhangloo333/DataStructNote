/**
 * Created by leizha on 1/31/17.




 */

var a = "dir/subdir2/subsubdir2/file2.ext";
var a11 = "dirsubdir2subsubdir2file2.ext";

console.log(a.length);
console.log(a11.length);

var c ='This is a BeginnersBook tutorial';
console.log(c.lastIndexOf('z')+"------------");

var sarr = [];
var ss ="dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext";
sarr = ss.split('\n');

for(var i = 0; i < sarr.length; i++){
    console.log(sarr[i]);
    var Lindex = sarr[i].lastIndexOf("\t");
    console.log(Lindex);
}

console.log(sarr);


function longAbsolutP(inputS){
    
    if(inputS == null && inputS.length == 0){
        return 0;
    }
    
    var stack = [0];
    var maxLen = 0;

    inputS.split('\n').map(function (e) {
        console.log("e==" + e);
        var lev = e.lastIndexOf('\t')+1;
        if(stack[lev] != 'undefined'){

        }
        var elength = e.length-lev;

        if(e.indexOf('.') == -1){
            stack.pop();
            stack.push(e.length-lev);
        } else {
            sum stack;

             maxlen = Math.max(maxLen,sum + e.length)
        }

        console.log(elength)

    });
    
    
    return maxLen;
}

// var er = longAbsolutP(ss);
var a = [];
console.log(a[1]);