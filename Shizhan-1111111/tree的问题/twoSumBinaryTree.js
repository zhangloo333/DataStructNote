/**
 * Created by lee on 9/8/17.
 */

var twoSumBinaryTree= function(root, sum) {
    if(root == undefined) return false;

    var arr = becomeArray(root);

    return twoSum(arr,sum);
}

var twoSum = function (arr,sum) {
    var indexSet = [];
    var mapset = new Set();

    for(var i = 0; i < arr.length; i++) {
        if(mapset.has(sum-arr[i])){
            return true;
        } else {
            mapset.add(arr[i])
        }
    }
    return false;
}


var becomeArray = function(root) {
    var out = [];

    if(root == null) return out;

    var val = root.val;
    var left = becomeArray(root.left);
    var right = becomeArray(root.right);

    out.push(val);
    out = out.concat(left);
    out = out.concat(right);

    return out;
}


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


var twoSumBinaryTree2 = function(root,sum) {
    if(root == null) return false;

    if(sum == 0) {
        return true;
    }

    sum -= root.val;

    var left = twoSumBinaryTree2(root.left,sum);
    var right = twoSumBinaryTree2(root.right,sum);
    return left || right;

}


console.log(twoSumBinaryTree2(t1,15));