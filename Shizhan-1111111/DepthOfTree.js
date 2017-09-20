/**
 * Created by lee on 9/8/17.
 */

function getDepth(root) {

        if (root == null) return 0;

        var left = getDepth(root.left);
        var right = getDepth(root.right);

        console.log('left', left, 'right',right);
        return Math.max(left,right) + 1;
}


var maxDepth = function(root) {
    var max = 0;

    function helper(root, depth){

        // 停止条件
        if(root == null){
            return;
        }

        //每次进入的循环体
        if(depth > max) {
            max = depth;
        }

        //再次进入循环
        helper(root.left,depth+1);
        helper(root.right,depth+1);
    }

    helper(root,1);
    return max
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

console.log(getDepth(t1));
console.log(maxDepth(t1));