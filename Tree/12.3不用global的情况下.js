/**
 * Created by leizha on 11/21/16.
 */
/**
 * 不用gloable 变量的情况下。
 * */

function longestConsecutive(root) {
    if(root == null) {
        return 0;
    }
    return helper(root,Number.MAX_VALUE,1);
}
function helper(root,lastValue,curlen) {
    if(root == null) {
        return curlen;
    }

    if(root.data == lastValue + 1) {
        curlen++;
    } else{
        curlen = 1;
    }

    var left = helper(root.left,root.data,curlen); // 此处忘+data座椅会有错误
    var right = helper(root.right,root.data,curlen);

    return Math.max(Math.max(left,right),curlen);
}

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
print(longestConsecutive(node1));