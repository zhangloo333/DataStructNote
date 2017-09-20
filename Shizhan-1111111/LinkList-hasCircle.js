/**
 * Created by lee on 9/8/17.
 */


var hasCircle = function(node) {
    if(node == null || node == undefined) return false;

    var faster = node;
    var slower = node;


    while(faster != null || faster.next != null) {
        slower = slower.next;
        faster = faster.next.next;

        if(faster == slower) return true;
    }
    return false
}

function Node(val) {
    this.val = val;
    this.next = null;
}

var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n1;

console.log(hasCircle(n2))