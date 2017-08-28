/**
 * Created by lee on 8/25/17.
 */

function reverseLinkList(node) {
    if(node == null || node.next == null) return node;

    var pre = null;
    var cur = node;

    while(cur != null) {
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

function Node(value) {
    this.value = value;
    this.next = null;
}
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(reverseLinkList(node1));
