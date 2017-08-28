var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(-1);
    var runner = head;
    var headl1 = l1,
        headl2 = l2;
    var flag = 0;

    while(headl1 || headl2) {

        var sum = flag + (headl1 ?headl1.val:0) + (headl2 ?headl2.val:0);
        flag = parseInt(sum/10);
        sum = parseInt(sum%10);

        var addnode = new ListNode(sum);
        runner.next = addnode;
        runner = runner.next;
        if(headl1) headl1 = headl1.next;
        if(headl2) headl2 = headl2.next;
    }

    if(flag != 0){
        runner.next = new ListNode(flag);
        runner = runner.next;
        flag = 0;
    }
    return head.next;
    
};