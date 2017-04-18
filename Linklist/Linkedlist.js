/**
 * Created by leizha on 9/2/16.
 */

function Node(val) {
    this.value = val;
    this.next = null;
}

function Linkedlist() {
    this.head;
    this.last;
    this.add = function (val) {
        var node = new Node(val);
        if(this.last == null) {
            var dummy = new Node(-1);
            dummy.next = node;
            this.head = dummy.next;
            this.last = this.head;
        } else {
            this.last.next = node;
            this.last = this.last.next;
        }
    };
    this.print = function () {
        var point = this.head;
        while (point !=null) {
            console.log(point.value);
            point = point.next
        }
    };

    this.reverse = function () {
        var pre = null;
        var cur = this.head;
        while(cur != null) {
            var next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        this.head = pre;
    }
}

var ssl = new Linkedlist();
ssl.add(1);
ssl.add(3);
ssl.add(4);
ssl.add(5);
ssl.add(6);

ssl.print();
ssl.reverse();
console.log("---------------");
ssl.print();
