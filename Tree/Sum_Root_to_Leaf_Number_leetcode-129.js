/**
 * Created by lee on 9/23/17.
 * @param {Treenode}:root
 * @return {Nubmber}
 * 1.计算所有从root到 leaf的sum
 */


var sumNumbers  = function (root) {
    var total = 0;

    if(root == null) return total;

    var queue = [root];

    while(queue.length !== 0) {
        var node = queue.shift();

        if(node.left === null && node.right === null) {
            total += parseInt(node.val);
        }

        if(node.left) {
            node.left.val = ''+ node.val + node.left.val;
            queue.push(node.left);
        }

        if(node.right) {
            node.right.val = '' + node.val + node.right.val;
            queue.push(node.right);
        }
    }

    return total;
}

// recursion的方法// divide and concur
var sumNumbers = function (root) {
    return helper(root,0);
}

function helper(root, sum) {
    if(root == null)  return 0;
    sum = sum * 10 + root.val;

    if(root.left === null && root.right === null) return sum;

    return helper(root.left, sum) + helper(root.right, sum);

}