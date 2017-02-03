/**
 * Created by leizha on 1/31/17.

 1. input: string
 2. output: length
 3. build internal storage:
    1. stack
    2. array: element length | Max length | lev | totaLength = stackPeek + element length - lev + 1

 4. string to array
 5  for loop
 6. 1. 根据 /t来计算出 lev
    2. 求出 element 的长度
    3. total的长度 + /

 7. 当element里面有.的时候 更新maxlen的长度
 8. 遍历完成,返回maxlen

 用到的函数:

 string.lastIndexOf('z') => 找不到return -1 ; 找到 return index.




 */

function lengthLongP1(inputS){
    
    if(inputS == null && inputS.length == 0){
        return 0;
    }// corner case
    
    //var stack = [0];
    var stack = new Array(inputS.length-1);
    var maxLen = 0;
    // builder internal register

    inputS.split('\n').map(function (e) {
        var lev = e.lastIndexOf('\t')+1;

        while(lev+1 < stack.length){
            stack.pop();
        }


        //if(stack[lev] != undefin){
        //    stack = stack.slice(0,lev-1);
        //} //这样用有问题,主要是stack是不定长的里面数不清楚


        var curLen = stack[stack.length-1]+e.length-lev+1;

        stack.push(curLen);

        if(e.indexOf('.') != -1){
            maxLen = Math.max(maxLen,curLen-1);
        }
    });// rule for loop element

    return maxLen;
}

function lengthLongP2(str){
    var path = str.split('\n');// change string to array

    var stack = Array.apply(null, new Array(path.length-1)).map(function () {return 0;});
    var maxLen = 0;
    // build internal register

    path.map(function(e){
        var lev = e.lastIndexOf('\t') + 1;

        stack[lev+1] = stack[lev] + e.length -lev +1;

        var curLen = stack[lev+1];

        if(e.indexOf(".") != -1){
            maxLen = Math.max(maxLen,curLen-1);
        }
    });

    return maxLen;
}

// run test case
var ss ="dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext";
console.log(lengthLongP1(ss));
console.log(lengthLongP2(ss));
