/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode cur=head,pre=null,nextTmp;
        while(cur!=null)
        {
            nextTmp=cur.next;
            cur.next=pre;
            pre=cur;
            cur=nextTmp;
        }
        return pre;
    }
}
