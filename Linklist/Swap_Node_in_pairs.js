/**
 * Created by lee on 9/10/17.
 */


function Node(val) {
    this.val = val;
    this.next = null;
}


function createLinklist(arr,n) {
    if(n == 0) return null;

    var head = new Node(arr[0]);

    var curNode = head;

    for(var i = 1; i < n; i++) {
        curNode.next = new Node(arr[i]);
        curNode = curNode.next;
    }

    return head;
}

function print(root) {

    if(root == undefined || root == null) return null;

    var curNode = root;

    while(curNode != null) {
        console.log(curNode.val, '->');
        curNode = curNode.next;
    }

    console.log("null");
}

var a = [1,2,3,4,5,6];

var link = createLinklist(a,a.length);
print(link);




var swapPairs = function (head) {

    if(head == null) return head;

    var dummyNode = new Node(-1);
    dummyNode.next = head;

    var p = dummyNode;

    while(p.next != null && p.next.next != null) {
        var node1 = p.next;
        var node2 = node1.next;
        var next = node2.next;

        node2.next = node1;
        node1.next = next;
        p.next = node2;

        p = node1;
    }

    return dummyNode.next;
}

print(swapPairs(link));