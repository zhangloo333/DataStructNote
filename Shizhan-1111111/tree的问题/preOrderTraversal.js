/**
 * Created by lee on 9/8/17.
 *
 */


var preorderTraversal = function(root) {
    var output = [];

    if(root == null) {
        return output;
    }

    var left = preorderTraversal(root.left);
    var right = preorderTraversal(root.right);


    // output = output.concat(left);
   // output.push(root.val);
   // output = output.concat(right);

   //化简成最简单的
   // output = output.concat(left,[root.val],right);
   return output.concat(left,[root.val],right)
};


function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var t1 = new TreeNode(1);
var t2 = new TreeNode(2);
var t3 = new TreeNode(3);
var t4 = new TreeNode(4);
var t5 = new TreeNode(5);
var t6 = new TreeNode(6);
var t7 = new TreeNode(7);
var t8 = new TreeNode(8);

t1.left = t2;
t1.right = t3;
t2.left = t4;
t2.right= t5;
t3.left = t6;
t3.right = t7;
t4.left = t8;

console.log(preorderTraversal(t1));
