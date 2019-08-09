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
        
        // 链表为空
        if(head==null)
            return head;
        
        // 哑节点,避免更新头节点的位置
        ListNode dummy=new ListNode(0);
        dummy.next=head;
        
        ListNode second=dummy.next;
        
        while(second.next!=null)
        {
            // 更新first位置
            ListNode first=second.next;
            
            // 将first插入至dummy后
            second.next=first.next;
            first.next=dummy.next;
            dummy.next=first;
        }
        
        head=dummy.next;
        return head;
    }
}
