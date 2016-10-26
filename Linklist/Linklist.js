/**
 * Created by leizha on 8/31/16.
 */

function Linknode(val) {
    this.val = val;
    this.next = null;
}

function Linklist() {
    this.head = new Linknode("head");
    this.pointer = this.head;

    this.add = function(val) {
        var newNode = new Linknode(val);
        this.pointer.next = newNode;
        // this.pointer = this.pointer.next;
        this.pointer = newNode;
    }


    this.reverse = function () {
        var current = this.head.next;

        while(current){
            current.next = prev;

        }
    }


}



var ssl = new Linklist();
ssl.add(1);
ssl.add(3);
ssl.add(4);
ssl.add(5);
ssl.add(6);
ssl.add(7 );
var current = ssl.head.next;
while(current){
    console.log(current.val);
    current = current.next;
}
// console.log(ssl);

