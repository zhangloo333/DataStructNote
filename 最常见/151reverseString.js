/**
 * Created by leizha on 2/10/17.
 *
 * 误区： string 不支持对某一位直接进行赋值通过下表，只有array支持对某一个某个下标（index）就行
 * 操作： string 只能读，不能直接写入。
 *
 * 如果 ++ 或 -- 写在 if语句里面，无论 if的条件成立与否都会，就行++， 或 -- 操作
 *
 * start 和 tail 都必须 一个是+ 操作，另一个是 "减法操作"。
 * 
 */

function reverseString(ss) {
    if(ss.length == 0 ||ss.length == 1) return ss;

    var s1 = ss.split("");
    // console.log(s1);
    var head = 0;
    var tail = s1.length-1;

    while(head < tail) {
        if(s1[head] == s1[tail]){
            head++;
            tail--;
        } else {
            var temp = s1[head];
            s1[head] = s1[tail];
            s1[tail] = temp;
            head++;
            tail--;
        }
    }

    return s1.join("");
}


//精简版本
function reverseString2(ss) {
    if(ss.length <=1) return ss;

    var s1 = ss.split("");
    var head = 0;
    var tail = s1.length-1;

    while(head < tail) {
        if(s1[head] != s1[tail]){
            var temp = s1[head];
            s1[head] = s1[tail];
            s1[tail] = temp;
        }
            head++;
            tail--;
    }

    return s1.join("");
}






var st ="asdasevgt";

console.log(reverseString(st));
console.log(reverseString2(st));