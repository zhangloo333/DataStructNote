/**
 * Created by lee on 8/25/17.
 */


function reacerTwoPoint(node,m,n) {
    if(node == null) return null;

    var dummy = new Node(-1);
    dummy.next = node;

    var start = dummy;

    for(var i = 0; i < m-1;i++) {
        start = start.next;
    }

    var end = start.next;
    var pre = end;
    var cur = end.next;

    for(var j = 0; j < n-m; j++){
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    start.next = pre;
    end.next = cur;

    return dummy.next;
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

function printNode(node) {
    while(node !== null){
        console.log(node.value);
        node = node.next;
    }

}

printNode(reacerTwoPoint(node1,3,5));