/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        
        if(l1==null)
            return l2;
        if(l2==null)
            return l1;
        
        // 保证l1的第一个节点值不大于l2的第一个节点值
        if(l1.val>l2.val)
        {
            ListNode temp=l1;
            l1=l2;
            l2=temp;
        }

        ListNode head=l1;
        
        // l1.next=null或者l2=null时不做处理
        while(l1.next!=null&&l2!=null)
        {
            // l2节点值大小处于l1两个相邻节点之间，则插入l2节点
            if(l2.val>=l1.val&&l2.val<l1.next.val)
            {
                l2.next=l1.next;
                l1.next=l2;
            
                l2=l2.next; // l2指向l2链表的下一个节点 
            }
            
            l1=l1.next;
        }
        
        //l1此时指向最后l1链表一个节点,l2链表可能还有节点，若有，则剩余的第一个节点必大于等于l1最后一个节点的值
        if(l2!=null)
            l1.next=l2;
        
        return head;
    }
}
