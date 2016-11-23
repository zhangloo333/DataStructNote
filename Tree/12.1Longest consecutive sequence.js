/**
 * Created by leizha on 11/21/16.
 */
/**
 * tree里面找到最长的连续的序列。返回sequence
 * 如果用object的去行况下，在function里面不断的调用自己 recursion，是需要this来表明是在这个object里面
 *
 * */
var max = 0;

function LongestConsecutive(root) {
    if(root == null) {
        return 0;
    }
    helper(root,Number.MIN_VALUE,1);
    return max;
}

function helper(root,last,count) {
    //base cases
    if(root == null){
        max = Math.max(max,count);
        return;
    }

    //current level
    if(root.data == last + 1){
        count++;
    } else {
        max = Math.max(max,count);
        count = 1;
    }

    helper(root.left,root.data,count);
    helper(root.right,root.data,count);
}

// testing result
function print(data) {
    console.log(data);
}


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

print(node1);
print("***************");
print(LongestConsecutive(node1));