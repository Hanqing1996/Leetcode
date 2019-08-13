/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    /**
     * O(n) 时间复杂度：固定次遍历长度为n的链表
     * O(1) 空间复杂度：固定个数指针,不能使用长度由n决定的数组
     *
     */
    
    // 思路:用快慢指针找出中间位置，然后反转后面半段链表,遍历判断是否回文
    public boolean isPalindrome(ListNode head) {
        
        // 空链表,返回true
        if(head==null)
            return true;
        
        // 设置哑节点，便于反转前面半段链表
        ListNode dummy=new ListNode(0);
        dummy.next=head;
        
        // 设置快慢指针初始位置
        ListNode fast=dummy,slow=dummy;
        
        // 用快慢指针遍历链表，快指针每次走两步，慢指针每次走一步
        while(fast.next!=null&&fast.next.next!=null){
            
            fast=fast.next.next;
            slow=slow.next;
        }
        
        // 保证fast指向最后一个节点
        if(fast.next!=null)
            fast=fast.next;
        
        // 反转后面半段链表
        while(slow.next!=fast){
            ListNode last=fast.next;
            ListNode cur=slow.next;
            
            slow.next=cur.next;
            fast.next=cur;
            cur.next=last;
        }
        
        // l1,l2分别指向两段链表的第一个节点
        ListNode l1=head,l2=fast;
        
        // 由于后面半段链表长度一定大于等于前面半段，因此应该以前面半段为遍历长度
        while(l1!=fast)// l1=fast时,不做处理
        {
            if(l1.val!=l2.val)
                return false;
            
            l1=l1.next;
            l2=l2.next;
        }
        return true;
    }
}
