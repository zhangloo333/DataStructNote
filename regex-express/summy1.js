/**
 * 正则是用来捕获的方法：
 * 1懒惰: 每次捕获一个就停止了。取消懒惰性： 在后面加上一个g
 * 2贪婪: 取消贪婪行 /\d+?/, 在量词的元字符+ 后面加上？可以取消贪婪行
 *
 * 在量词的元字符+ 后面加上？可以取消贪婪行
 * ？：在【分组中】只进行 匹配，不进行捕获。
 *
 * 循环捕获
 * match来捕获， match一次性把大正则的都存放在数组当中，也需要捕获小分组的内容，match是不活不到的
 *
 */

const reg = /\d+/;
const reg1 = /\d+?/;
const str = 'asdadasd234asdasds2039';

let arr = reg.exec(str);
console.log('arr', arr);

//懒惰： 每次只捕获一个就停止
let arr1 = reg1.exec(str);
console.log('arr', arr1);
let arr2 = reg1.exec(str);
console.log('arr', arr2);

/**
 * 取消懒惰性： 每次/asd/g
 * g主要是跟新了lastindex的值，它代表下次正则捕获的开始索引是上一次找到的位置
 */
const reg2 = /\d+?/g;
let arr3 = reg2.exec(str);
console.log('arr', arr3);
let arr4 = reg2.exec(str);
console.log('arr', arr4);

//怎么循环
const reg3 = /\d+?/g;
let res = reg3.exec(str),
  arry = [];
while (res) {
  arry.push(res[0]);
  res = reg3.exec(str);
}
console.log('arry', arry);

// match 字符串用开匹配正则的一个方法, 这个和while的循环是一模一样的。
var reg4 = /\d+?/g;
const str = 'asdadasd234asdasds2039';
var rest = str.match(reg4);
console.log('rest', rest);

//分组捕获
