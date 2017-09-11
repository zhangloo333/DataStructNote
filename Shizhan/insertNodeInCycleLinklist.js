/**
 * Created by lee on 9/8/17.
 */
/**
 * Created by leizha on 7/13/17.
 *
 * 这道题有三种情况：
 * 1 这个linkedlist 是空的，插入的node 就是这个新的node
 * 2 这个要插入的node 要小于sorted linked 的head，我们遍历这个list 直到找到结尾，为止。
 * 3 如果插入 node 在head 和 tail之间，我们需要遍历找到合适的位置，然后插入。
 *
 * 遍历停止的调教 while(current != head) 找到这个list的结尾
 *
 * 找到合适的为止插入，while(current != head && current.next.val < insertNode.val)进行
 * 迭代
 *
 */

function Node(val) {
    this.val = val;
    this.next = null;
}


function insertNode(head, Node) {

    var current = head;

    // linkList is null
    if(current == undefined){
        Node.next = Node;
        head = Node;
        // return head;
    }

    // Insert 在head的前面一位插入，
    else if(current.val >= Node.val) {
        while(current.next != head) {
            current = current.next;
        }
        current.next = Node;
        Node.next = head;
        head = Node;
        // return head;
    }

    // 第三种情况插入任何的位置
    else {
        while(current.next != head && current.next.val < Node.val) {
            current = current.next;
        }

        Node.next = current.next;
        current.next = Node;
        // return head;
    }

    return head;
}

var l1= new Node(3);
var l2= new Node(4);
var l3= new Node(6);
var l4= new Node(8);
var l5= new Node(10);

var inNode = new Node(5);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l1;


var head;
var result = insertNode(l1,inNode);
console.log(result);

function printLi(head) {
    var current = head;
    while(current.next != head) {
        console.log(current.val);
        current = current.next;
    }
    console.log(current.val);
}

printLi(result);
// console.log(l1);