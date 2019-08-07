/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {

        
        ListNode dummy=new ListNode(0);
        dummy.next=head;
        
        ListNode first=dummy;
        
        // first.next=null表示剩余0个节点;first.next.next=null表示剩余1个节点，这两种情况不做处理
        while(first.next!=null&&first.next.next!=null) 
        {
            // 更新second,nextTmp位置,保证second,nextTmp不为空
            ListNode second=first.next;
            ListNode nextTmp=second.next;
            
            // 节点交换
            second.next=nextTmp.next;// 注意nextTmp.next为null时交换也在进行
            first.next=nextTmp;
            nextTmp.next=second;
            
            // 更新first位置,first可能为空
            first=nextTmp.next;
        }
        head=dummy.next;
        return head;
    }
}
