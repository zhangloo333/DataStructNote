package standarLinkedlist;

/**
 * Created by leizha on 9/7/16.
 */

class ListNode {
    ListNode next;
    int val;

    ListNode (int value){
        val = value;
        next = null;
    }
}


public class StandarLinklist {
    ListNode head;
    ListNode last;

    public StandarLinklist() {
    }

    public void add(ListNode node) {
        if (last == null) {
            ListNode dummy = new ListNode(-1);
            dummy.next = node;
            head = dummy.next;
            last = head;
//            return dummy.next;
        } else {
            last.next = node;
            last = last.next;
//            return head;
        }
    }

    public void print() {
        ListNode pr = head;
        while (pr != null) {
            System.out.println(pr.val);
            pr = pr.next;
        }
    }

    public void reverse() {
        ListNode pre = null;
        ListNode cur = head;

        while (cur != null) {
            ListNode next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }

        head = pre;

    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode l2 = new ListNode(2);
        ListNode l3 = new ListNode(3);
        ListNode l4 = new ListNode(4);

        StandarLinklist nc = new StandarLinklist();
        nc.add(l1);
        nc.add(l2);
        nc.add(l3);
        nc.add(l4);
        nc.print();
        System.out.println("print out reverse number");
        nc.reverse();
        nc.print();
    }

}
