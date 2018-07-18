/**
 * Created by lee on 6/27/18.
 */

/**
 * @type {RegExp}
 * 1.匹配 reg.test()
 * 2.捕获 reg.exec() 把字符串中符合我们的内容捕获到
 *
 * 2. 创建正则的两种方式：
 *  1- 字面量的方式：
 *  var reg = /\d/
 *
 *  2-创建实例的方式：
 *    var reg = new RegExp("\d");
 *
 *   两种方式有区别：
 *
 * 3. 元字符： 在// 之间具有意义的一些字符
 * 每一个正则表达式都是由元字符和修饰符组成的
 *
 * 把常用的元字符背下来，基本上就会了
 *
 *  1. 具有特殊意义的元字符
 *      \：右斜杠，把现有意思转变
 *      ^: 以某一个元字符开始
 *      $: 以某一个元字符结尾
 *
 *  2.代表出现次数的量词元字符
 *      *: 出现 0 到 n 次
 *      +: 出现 1 到 n 次
 *      ?: 出现 0 带 1 次
 *      {n}: 出现 n 次
 *      {n,}: 出现 n 到 多次
 *      {n,m}: 出现 n 到 m 次
 *
 *
 *
 *
 *  e.g reg = /^/d$/ 只能是0-9之间的数字， 开头是 0-9， 结尾是 0-9， 中间是0-9
 *   ^ 和 $ 在字符串 里面并不占地方，只有/d 占位置
 *    console.log(reg1.test("9")); true
 *    console.log(reg1.test("012")); false
 *
 *
 */

//正则都是 对我们系统的结果
var reg = /\d/; //必须包含一个0-9之间的数字

// * 1.匹配 reg.test()
//判断是否字符串是否符合我们的制定的规则
console.dir(RegExp.prototype);

console.log(reg.test("asdasd"));
console.log(reg.test("1"));
console.log(reg.test("sdasd2015"));

// * 2.捕获 reg.exec() 把字符串中符合我们的内容捕获到
//把字符转中符合我们正则的内容捕获到
console.log(reg.exec("asdas"));
console.log(reg.exec("asd1"));


var reg1 = /^\d$/;
console.log(reg1.test("9"));
console.log(reg1.test("012"));

