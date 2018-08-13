/**
 * 匹配，
 * 捕获
 *
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
str = 'asdadasd234asdasds2039';

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
str = 'asdadasd234asdasds2039';
var rest = str.match(reg4);
console.log('rest', rest);
// 怎么写一个match的方法在正则的当中, 远离只能搜索大正则，而不是小增则。
String.prototype.match = function(reg) {
  let array = [],
    char = reg.exec(this);
  while (char) {
    array.push(char);
    char = reg.exec(this);
  }
  return array;
};

var reg4 = /\d+?/g;
const str2 = 'asdadasd234asdasds2039';
var rest1 = str2.match(reg4);
//分组捕获

let strgroup = 'my name is {0}, my age is {1}, i come from {2}, i love {3}';
let copyMap = ['lei', 29, 'california', 'javascript'];
let reg5 = /{(\d+)}/g;
console.log(reg5.exec(strgroup));
// replace 怎么用
str = 'nihaoxiaomi, nihaotahao';
//每次 只替换到一个数字
str = str.replace('nihao', 'hello');
console.log(str);

//都替换掉，把符合正则都替换成 后面的数字
str = 'nihaoxiaomi, nihaotahao';
str = str.replace(/nihao/g, 'hello');
console.log(str);
/**
 * 捕获一次 replace一次
 * lastIndex = 0;
 *
 * lastIndex = 5
 *
 * lastIndex = 最后的长度
 */
// replace如果第一个argument是 正则，就不断的匹配和替换, replace  的return是什么，就是什么。
let strgroup = 'my name is {0}, my age is {1}, i come from {2}, i love {3}';
let copyMap = ['lei', 29, 'california', 'javascript'];
let reg5 = /{(\d+)}/g;

strgroup = strgroup.replace(reg5, function(content, index, input) {
  // console.log('arguments', arguments);
  console.log('content', content, 'index', index, 'input', input);
  return copyMap[arguments[1]];
});
console.log(strgroup);

let strgroup = 'mixiao12123 mixiao3123123';
let reg5 = /mixiao/g;

strgroup = strgroup.replace(reg5, function(content, index, input) {
  //按原样返回，但是变成大写
  return content.toUpperCase();
});
console.log(strgroup);

//只起到提高优先级， 只是匹配 并不 捕获
// ？： 如果有7个分组，但最后的一个不进去到 分组中。
let reg6 = /{(?:\d+)}/g;
console.log(reg6.exec(strgroup));

//获取url中的参数
const regex11 = /([^?&=]+)=([^?&=]+)/g; //除了？&=意外的任何字符，
//格式化时间
