/**
 * Created by lee on 9/9/17.
 * 1. create link list;
 * 2. print linklist
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
