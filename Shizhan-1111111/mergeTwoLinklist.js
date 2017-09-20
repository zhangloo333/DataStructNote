/**
 * Created by lee on 9/7/17.
 *
 * 首先你想要 return 回来一个 node 的list， 所以我们需要一个 dummy的开头；
 * 然后我们需要一个滑动的模块；
 *
 */

function Node(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLinks = function (L1,L2) {

    var dummy = new Node(-1);
    var runner = dummy;

    while(L1 && L2 && L1.val != undefined && L2.val != undefined) {
        if(L1.val < L2.val) {
            runner.next = L1;
            L1 = L1.next;
        } else{
            runner.next = L2;
            L2 = L2.next;
        }

        runner = runner.next;
    }

    if(L1 && L1.val != undefined) {
        runner.next = L1;
    }

    if(L2 && L2.val != undefined) {
        runner.next = L2;
    }

    return dummy.next || null;
}


var mergetKsort = function (lists) {

    var temp = [];
    var i;

    while(lists.length > 1){
        for(i= 0; i < lists.length; i+=2) {
            temp.push(mergeTwoLinks(lists[i],lists[i+1]));
        }
        if(i == lists.length-1) {
            temp.push(lists[lists.length-1]);
        }
        lists = temp;
    }

    return temp[0] || null;
}