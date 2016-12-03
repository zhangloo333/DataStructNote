/**
 * Created by leizha on 12/2/16.
 *
 * II 和 I少有不同，支持 add and find 的操作
 * add x into 内部的 data structure 里面
 * find 在内部的data structure里面 找到一组pair 它们相加等于 target
 *
 * 不同主要是在input： 这里是一个数据流， data stream 的操作。
 *
 * 第一步： 对问题足够的分解：
 *         add  return void
 *         find return boelean
 *         assumption: 足够的memory to store the stream of data
 *         no data receive --> return false when call find()
 *
 * datastream的题最重要的是怎么设计一个数据结构去加载他：
 *
 * 思维解决的方法： 主要是怎么 设计一个class 去装载 stream
 */



function Node(val) {
    this.value = val;
    this.next = null;
}

function List() {
    this.head;
    this.last;
    this.add = function (val) {
        var node = new Node(val);
        if (this.last == null) {
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
        while (point != null) {
            console.log(point.value);
            point = point.next
        }
    };
}



function TwoSum(){
    this.Mstorage = new Map();
    this.List = new List();
}

TwoSum.prototype.add = function (data) {
    this.List.add(data);

    var frequecy = this.Mstorage.get(data);

    if(frequecy == null){
        this.Mstorage.set(data,1);
    } else {
        this.Mstorage.set(data,frequecy+1);
    }
}

TwoSum.prototype.find = function (sum) {
    // if(this.Mstorage.size < 2){
    //     return false;
    // }
    var pointer = this.List.head;

    while(pointer != null){
        var target = sum - pointer.value;
        var count = this.Mstorage.get(target);

        if(count != null){
            if(pointer.value != target || (pointer.value == target && count >= 2)){
                return true;
            }
        }
        pointer = pointer.next;
    }

    return false;

}

var tesing = new TwoSum();
tesing.add(1);
tesing.add(2);
tesing.add(3);
tesing.add(4);
tesing.add(4);
tesing.add(5);
tesing.add(6);
tesing.add(7);
tesing.add(8);

// console.log(tesing.Mstorage);
// console.log(tesing.List);
console.log(tesing.find(111));
