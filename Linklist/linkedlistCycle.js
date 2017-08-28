/**
 * Created by lee on 8/25/17.
 */

var hasCycle = function(head) {
    if(head == null || head.next == null){
        return false;
    }

    var slow = head.next;
    var fast = head.next.next;

    if(fast == null){
        return false;
    }

    while(slow != fast){
        if(fast.next == null){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;

        if(slow == null || fast == null){
            return false;
        }
    }
    return true;
}