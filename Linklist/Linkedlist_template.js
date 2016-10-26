
/**
 * Created by leizha on 9/2/16.
 */
// http://www.java2s.com/Tutorials/Javascript/Javascript_Data_Structure/0370__Javascript_Linked_List.htm

function Node(element) {
    this.element = element;
    this.next = null;
}


function Node(element) { /*from   w w w .ja va 2s  .co  m*/
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}


//Removing Nodes from a Linked List

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

var cities = new LinkedList();
cities.insert("A", "head");
cities.insert("B", "A");
cities.insert("C", "B");
cities.display();
cities.remove("C");
cities.display();