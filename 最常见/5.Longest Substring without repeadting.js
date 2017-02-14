/**
 * Created by leizha on 12/8/16.
 *
 * 给你个array： b c a c e x
 * 让你找出 程序里面最长没有重复的subarray
 *
 * 找 sub array 的问题主要是 两个指针怎么移动（谁先移动，谁后移动）。直到最后 到达 array 的尾部停止了搜索。 在移动期间来更新global
 * 的variable来更新最后的return量。
 * input: string
 * out: length/ substring
 * corner case: string == null. return 0
 *
 * note：
 * ss 是str的问题 还是一个 char的array。 如果是（char的array）不能直接用.substr()
 * 要用join来把array现转换成str
 *
 *
 */

function LonestSubtring(ss) {
    if(ss == null && ss.length ==0) {
        return 0;
    }

    var header =0;
    var tail = 0;
    var glength = 0;
    var storage = new Set();

    while(tail < ss.length && header < ss.length) {
            if(!storage.has(ss[tail])){
                storage.add(ss[tail]);
                tail++;
                glength = Math.max(storage.size,glength);
            }else {
                glength = Math.max(storage.size,glength);
                storage.delete(ss[header]);
                header++;
            }
    }

    // console.log(header);
    // console.log(glength);
    // var outp;

    if(typeof ss === "string"){

        outp= ss.substr(header,glength);
    } else {
        outp = ss.join("").substr(header,glength);
    }
    console.log(outp);

    return glength;

}

var a1 = ['b','c','a','c','e','x'];
// var a1 ='bcacex';
console.log("result--------");
console.log(LonestSubtring(a1));