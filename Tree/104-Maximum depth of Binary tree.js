/**
 Given a binary tree, find its maximum depth.
 The maximum depth is the number of nodes along the longest path
 from the root node down to the farthest leaf node.

 题目：给出一个 二叉树，找到最大的深度；
 最大深度是 root to leaf 的长度
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 *
 * @param {TreeNode} root
 * @return {number}
 */

// divide conquer
var maxDepth = function(root) {
    return helper(root);
};

var helper = function (root) {

    if(root == null) {
        return 0;
    }

    // divid
    var left = helper(root.left);
    var right = helper(root.right);

    //conquer
    return Math.max(left,right) + 1;
}

//traverse
var helper = function(root, depth){

    if(root == null){
        return;
    }

    if(depth > this.max) {
        this.max = depth;
    }

    helper(root.left,depth+1);
    helper(root.right,depth+1);
}
var maxDepth = function(root) {
    this.max = 0;
    this.helper = helper;
    this.helper(root,1);
    return this.max
};
