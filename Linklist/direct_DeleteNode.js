/**
 * Created by lee on 9/10/17.
 */

function print(root) {

    if(root == undefined || root == null) return null;

    var curNode = root;

    while(curNode != null) {
        console.log(curNode.val, '->');
        curNode = curNode.next;
    }

    console.log("null");
}


function Node(val) {
    this.val = val;
    this.next = null;
}


var deleteNode = function (node) {

    if(node == null) return;

    if(node.next == null) {
        node = null;
        return
    }

    node.val = node.next.val;
    var delNode = node.next;
    node.next = delNode.next;

    return
}


print(deleteNode())