/**
 * Created by leizha on 11/15/16.
 */
/**
 * Binary Tree upside Down
 * 这个主要是用来熟悉recursion
 * while + 变量的更替：主要是iteration来mimic recursion。
 * recursion:
 *          考虑这个问题 能不能分解成 小问题，这些小问题有着相似 方法和步骤。
 *          然后考虑的就是怎么 一个小问题 链接到另一个小问题的 那些变量的变化。
 *          在每一层需要不需要有返回的变量--return 的值； 这个值在return的过程中需要改变还是不变的
 * */

function Node(data) {
    this.data = data;
    this.left = null;
    this.left = null;
}

function upsideDownBinaryTree1(root) {
    if(root == null) {
        return root;
    }
    var stack = [];
    while(root != null){
        stack.push(root);
        root = root.left;
    }

    var newRoot = stack.pop();
    var cur = newRoot;

    while(stack.size != 0){
        var oriParent = stack.pop();
        cur.right = oriParent;
        cur.left = oriParent.left;

        cur = oriParent;
        oriParent.left = null;
        oriParent.right = null;

    }

    return
}




//returnsion

function upsideDownBinaryTree(root) {
    if(root == null || root.left == null) {
        return root;
    }
    // assume all lower levels are handled
    var newRoot = upsideDownBinaryTree(root.left);

    root.left.left = root.right;
    root.left.right = root;

    root.left = null;
    root.right = null;

    return newRoot;
}

var root = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log(root);

console.log('----------------------------');

var new1 = upsideDownBinaryTree(root);
console.log(new1);