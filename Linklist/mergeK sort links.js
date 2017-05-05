/**
 * Created by lee on 4/29/17.
 function ListNode(val) {
     this.val = val;
     this.next = null;
}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}


var mergeTwoLints = function (l1,l2) {
    var head = new ListNode(-1);
    var runner = head;

    while (l1 && l2 && l1.val != undefined && l2.val != undefined) {
        if(l1.val < l2.val) {
            runner.next = l1;
            l1 = l1.next;
        } else {
            runner.next = l2;
            l2 = l2.next;
        }
        runner = runner.next;
    }
    if(l1 && l1.val != undefined) {
        runner.next = l1;
    }
    if(l2 && l2.val != undefined) {
        runner.next = l2;
    }
    
    return head.next || [];
}

var mergeKlists = function (lists) {
    var i;

    while(lists.length >= 2) {
        var temp = [];//这个变量一定要在 while里面如果在外变话，每次进入temp，不会重新clear while的值
        for(i = 0; i < lists.length-1; i+=2) {
            temp.push(mergeTwoLints(lists[i],lists[i+1]));
        }
        if(i === lists.length-1){
            temp.push(lists[lists.length-1]);
        }
        lists = temp;
    }

    return lists[0] || null;
}