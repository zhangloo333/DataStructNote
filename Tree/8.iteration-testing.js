/**
 * Created by leizha on 11/16/16.
 */
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function upsideDownBinaryTree1(root) {
    if(root == null) {
        return root;
    }
    var stack1 =[];
    while(root !== null){
        stack1.push(root);
        root = root.left;
    }

    var newRoot = stack1.pop();
    var cur = newRoot;
    // console.log("ttt" + newRoot);
    // console.log("ttt" + stack1);
// stack1.isEmpty == stack.size-1 >= 0 而不是 stack.size != 0 尤其为重要。
    while(stack1.length !== 0){ //  一定记住 array 是没有size的，一定为 length
        // var oriParent = new Node(-1);
        var oriParent = stack1.pop();        // console.log("testing" + oriParent);
        cur.right = oriParent;
        cur.left = oriParent.right;

        cur = oriParent;
        oriParent.left = null;
        oriParent.right = null;
    }

    return newRoot;
}

console.log('----------------------------');

var root = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

var new000 = upsideDownBinaryTree1(root);
console.log(new000);