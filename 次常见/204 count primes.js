/**
 * Created by leizha on 3/6/17.
 count prime number: 什么是prime number， 只能被自己和1整除的数才是 prime number
 有一个算法，先建立 n 长度一样的表，把2的倍数全部标记一下， 3的平方全部标记一下，5平方全部标记，
 7的平方全部标记，11的平方标记一下就行了。

 怎么表示2的倍数呢， number%2 == 0能被 2整除，number 从0～n，不断怎么加number的值；
 从2～n(截止的number)每次都加2，都是2的倍数；
 2～n，每次都加3都是3的倍数

 for all number a: from 2 to sqrt(n)
    if a is unmarked then
       a is prime
        for all multiple of a (a<n)
            mark 标记为 倍数true；

 数一个有多少个为被unmarked 的number

 解题的讲解：http://open.163.com/movie/2012/10/0/6/M99VJKUHC_M9ENDUB06.html
 解题的答案：
 http://bookshadow.com/weblog/2015/04/27/leetcode-count-primes/
 http://www.cnblogs.com/grandyang/p/4462810.html
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n <3) return 0;

    var notPrim = new Array(n+2);
    notPrim[0] = notPrim[1] = true;

    var res = 0;

    for(var i =2; i*i < n; i++) {
        console.log("i = " + i + "  notprim[i]= " + notPrim[i]);
        if(!notPrim[i]){
            var c = i*i;
            console.log("c = " +c);
            while(c < n) {
                notPrim[c] = true;
                c += i;
                console.log("enter" + " c " + c);
            }
        }
    }
   console.log(notPrim);

    for(var i = 0; i < n; i++) {
        if(!notPrim[i]) {
            res++;
        }
    }

    return res;
};

console.log(countPrimes(10));