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
    //console.log(stack.length);
    var maxLen = 0;

    inputS.split('\n').map(function (e) {
        console.log("e==" + e);

        var lev = e.lastIndexOf('\t')+1;

        //if(stack[lev] != 'undefined'){
        //    stack = stack.slice(0,lev-1);
        //    console.log(stack);
        //}

        while(lev+1 < stack.length){
            stack.pop();
        }

        var curLen = stack[stack.length-1]+e.length-lev+1;
        stack.push(curLen);

        if(e.indexOf('.') != -1){
            maxLen = Math.max(maxLen,curLen-1);
            console.log(maxLen);
        }
        //console.log(elength)

    });
    
    
    return maxLen;
}

 var er = longAbsolutP(ss);
//var a = [];
console.log("www"+er);


var ccc ='dir/subdir2/file.ext';
console.log(ccc.length);


function lengthLongP(str){
    var path = str.split('\n');
    var stack = Array.apply(null, new Array(path.length-1)).map(function () {return 0;});

    var maxLen = 0;

    path.map(function(e){
        var lev = e.lastIndexOf('\t') + 1;
        stack[lev+1] = stack[lev] + e.length -lev +1;
        console.log(stack);
        var curLen = stack[lev+1];

        if(e.indexOf(".") != -1){
            maxLen = Math.max(maxLen,curLen-1);
        }
    });

    return maxLen;
}

console.log(lengthLongP(ss));

