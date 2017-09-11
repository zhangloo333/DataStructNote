/**
 * Created by lee on 9/10/17.
 */
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
// print(link);

function Node(val) {
    this.val = val;
    this.next = null;
}

var deleteNode = function (head,target) {

    var dummy = new Node(-1);
    dummy.next = head;

    var cur = dummy;

    while(cur.next != null) {
        if(cur.next.val == target) {
            var deleteNode = cur.next;
            cur.next = deleteNode.next;
        } else {
            cur = cur.next;
        }
    }

    return dummy.next;
}

var c = deleteNode(link,4);
print(c);

var deleteDulplicate = function (head) {

    var dummy = new Node(-1);
    dummy.next = head;

    var cur = dummy;

    while(cur.next != null) {
        if(cur.val == cur.next.val) {
            var deleteNode = cur.next;
            cur.next = deleteNode.next;
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;

}

var a2 = [1,1,2,2,3,3,4,4,5,5];

var link2 = createLinklist(a2,a2.length);
console.log('runing----------');
print(link2);
print(deleteDulplicate(link2));