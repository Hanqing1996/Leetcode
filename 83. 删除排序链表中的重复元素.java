/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public ListNode deleteDuplicates(ListNode head) {
    ListNode current = head,nextTmp;
    while (current != null && current.next != null) {
        nextTmp=current.next;
        if (current.next.val == current.val) {
            current.next = current.next.next;
            nextTmp.next=null;
            // current=current.next; //可能存在连续重复的情况，因此不可以移动current指针
        } else {
            current = current.next;
        }
    }
    return head;
}
