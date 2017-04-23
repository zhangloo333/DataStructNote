/**
 * Created by lee on 4/22/17.
 */

var TreeNode = function (val) {
    this.val = val;
    this.left = null;
    this.right = null;

}

// stack的写法
var preorderTraversal = function (root) {

    //定义变量
    var stack = [];
    var preoder = [];

    if(root == undefined) {
        return preoder;
    }

    stack.push(root);
    while(stack.length >0) {
        var tempNode = stack.pop();
        preoder.push(tempNode.val);

        if(tempNode.right != undefined || tempNode.right != null) {
            stack.push(tempNode.right);
        }

        if(tempNode.left != undefined || tempNode.left != null) {
            stack.push(tempNode.left);
        }

    }
    return preoder
}

//traverse的写法
var preorderTraversal1 = function (root) {
    this.preoder = [];
    this.helper = helper(root,preoder);

    return preoder;

}

function helper(root, result) {

    if(root == null) {
        return
    }

    result = this.preoder;
    result.push(root.val);
    helper(root.left,result);
    helper(root.right,result);
}

// divide and onquer 在使用concat 不是在原位操作，必须操作之后重新付给result。

var preorderTraversal2 = function (root) {

    var result = [];


    if(root == null) {
        return result;
    }

    var left = preorderTraversal2(root.left);
    var right = preorderTraversal2(root.right);

    result.push(root.val);
    result = result.concat(left);
    result = result.concat(right);

    return result;

}

var node1 = new TreeNode(1);
var node2 = new TreeNode(4);
var node3 = new TreeNode(5);
var node4 = new TreeNode(6);
var node5 = new TreeNode(10);
var node6 = new TreeNode(15);
var node7 = new TreeNode(16);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

console.log(preorderTraversal(node1));
console.log(preorderTraversal1(node1));
console.log(preorderTraversal2(node1));

