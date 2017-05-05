/**
 * Created by lee on 4/29/17.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLinks = function (l1,l2) {

    var dunmy = new ListNode(-1);
    var runner = dunmy;

    while(l1 && l2 && l1.val != undefined && l2.val != undefined) {
        if(l1.val < l2.val) {
            runner.next = l1;
            l1 = l1.next;
        } else  {
            runner.next = l2;
            l2 = l2.next;
        }
        runner = runner.next; // 机器重要，要不runner不会走
    }

    if(l1 && l1.val != undefined) {
        runner.next = l1;
    }
    if(l2 && l2.val != undefined) {
        runner.next = l2;
    }

    return dunmy.next || null;

}

var mergeKSort = function (lists) {

    var temp = [];
    var i;
    while(lists.length >=2){
        for(i=0; i<lists.length-1; i+=2) {
            temp.push(mergeTwoLinks(lists[i],lists[i+1]));
        }
        if(i == lists.length-1) {
            temp.push(lists[lists.length-1]);
        }
        lists = temp;
    }

    return temp[0] ||[];
}