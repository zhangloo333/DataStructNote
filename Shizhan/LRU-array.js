/**
 * Created by lee on 9/7/17.
 */

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.keyMap = new Set();
    this.queue = [];
}

LRUCache.prototype.get = function (key) {

    if(this.keyMap.has(key)){
        for(var i = 0; i < this.queue.length; i++) {
            if(this.queue[i].key == key) {
                var value = this.queue[i].value;
                this.queue.splice(i,1);
                this.queue.unshift({
                    key: key,
                    value: value
                })
                return value;
            }
        }
    }
    return -1;
}

LRUCache.prototype.add = function (key, value) {
    if(this.keyMap.has(key)){
        var index = -1;
        for(var i = 0; i < this.queue.length; i++) {
            if(this.queue[i].key == key){
                index = i;
                break;
            }
        }
        // this.queue = this.queue.slice(index).concat(this.queue.slice(index));
        //把原有的数从位置上 删除，然后从storage 的头加入这个元素；
        this.queue.splice(index,1);
    } else {
        this.keyMap.add(key);
    }

    this.queue.unshift({key:key,value:value});

    if(this.queue.length > this.capacity) {
        var pop = this.queue.pop();
        this.keyMap.delete(pop.key);
    }
}

var aa = [1,2,3,4,5,6,7]

bb = aa.slice(0,3)
console.log(bb);
cc = aa.slice(4);
console.log(bb.concat(cc));
console.log(cc);