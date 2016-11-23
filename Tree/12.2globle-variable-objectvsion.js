/**
 * Created by leizha on 11/21/16.
 */
/** Build a tree node
 * */

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.show = show;
}

function show() {
    return this.data;
}

function print(data) {
    console.log(data);
}

function LongestConsecutive(root) {
    this.root= root;
    this.max = 0;
    this.solution = solution;
    this.helper = helper;
}

function helper(root,last,count) {
    //base cases
    if(root == null){
        this.max = Math.max(this.max,count);
        return;
    }

    //current level
    if(root.data == last + 1){
        count++;
    } else {
        this.max = Math.max(this.max,count);
        count = 1;
    }

    this.helper(root.left,root.data,count); // 这里必须加上 this 如果不加 返回份结果不是正确的。
    this.helper(root.right,root.data,count); // 这里必须加上 this 如果不加 返回份结果不是正确的。
}

function solution() {
    // this.root = root;
    if(this.root == null) {
        return 0;
    }
   this.helper(this.root,Number.MIN_VALUE,1);
    return this.max;
}

var node1 = new Node(2);
var node2 = new Node(2);
var node3 = new Node(1);
var node4 = new Node(3);
var node5 = new Node(2);
var node6 = new Node(3);
var node7 = new Node(5);
var node8 = new Node(0);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node3.right = node5;

node5.left = node6;
node5.right = node8;

node6.right = node7;

print("***************");
var a = new LongestConsecutive(node1);
print(a.solution());