/**
 * Created by lee on 11/14/16.
 */
/**
 * 关于array的基本操作
 * 1. push 就是 在array的 end 添加元素
 * 2. pop 就是弹出 array last 的元素
 * 3. unshift() 就是在 array 的头添加元素.
 * 4. shift() 就是在array 移除 array的第一个元素.
 * 5. 如何判断一个数组里是否包含一个数。 .indexOf(data) 如果包含返回 index如果不包含
 * 6. 怎么delete 任意位置的值。1。先找到这个index，2.删去index上的这个值 array.splice(index，1）
 * */

// aa = [2,1]
var aa = [];
aa.push(1);
aa.unshift(2);
function search(nums, target) {
    // corner case
    if(nums == null || nums.length == 0){
        return -1;
    }
    //函数内部的空间属性
    var start = 0;
    var end = nums.length -1;

    while(start +1 < end) {

        var mid = Math.trunc(start + (end - start)/2);

        if(nums[mid] == target) {
            return mid;
        }

        if(nums[mid] > nums[start]){
            if(target >= nums[start] && target < nums[mid]){
                end = mid;
            } else {
                start = mid;
            }

        }else{
            if(target>nums[mid] && target <= nums[end]){
                start = mid;
            } else {
                end = mid;
            }

        }
    }

    if(nums[start] == target){
        return start;
    }
    if(nums[end] == target){
        return end;
    }
    return -1;

}
console.log(aa);


// sort:-- javascript 中的sort不是按照 数字的大小来排列的, 主要是根据unicode pointer(字母顺序表 按照string的顺序来排列的) 来排列的.
var bb = [1,2,3,2,5,6,78,67,8,9,0];
var cc = bb.sort(function(a,b){return a-b});
console.log(cc);
console.log("bb" + bb);

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
];
console.log(items.sort(function(a,b){return a.value - b.value}))

var a = [1, 2, 3];
console.log(a.indexOf(4)); // false


var abc = [1,2,3];
console.log(abc);
abc.splice(0,2);
console.log(abc);


var cvb = [1,2,3,4,5];
var ddd = cvb.shift();
console.log("-----"+ddd);