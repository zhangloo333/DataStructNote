~function() {
 var pro = Array.prototype;
 pro.uniqArray = function uniqArray(){
     var obj = {};
     for (var i = 0; i < this.length; i++) {
         var item = this[i];
        if(typeof obj[item] !== 'undefined') {
            this[i] = this[this.length -1];
            this.length--;
            i--;
            continue;
        }
        obj[item] =item;
     }
     obj = null;
     return this;
 }

 let c = [1,3,3,4,5,5];
 console.log(c.uniqArray());
}()