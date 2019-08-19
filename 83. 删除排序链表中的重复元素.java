/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

/**
 * 迭代
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        
        ListNode cur=head;
        
        // 链表为空
        if(cur==null)
            return head;
        
        // cur.next=null时不做处理
        while(cur.next!=null)
        {
            // 更新nextTmp位置,保证nextTmp不为空
            ListNode nextTmp=cur.next;
            
            // 节点删除
            if(cur.val == nextTmp.val){
                cur.next=nextTmp.next; // 注意nextTmp.next容许为空
                nextTmp.next=null;
            }
            else
                cur=cur.next;   
        }
        return head;
    }
}

/**
 * 递归
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        
        ListNode cur=head;
        
        // 链表为空
        if(cur==null)
            return head;
        
        return delete(cur,cur.next,head);
    }

    private ListNode delete(ListNode cur,ListNode nextTmp,ListNode head){
        if(nextTmp==null)
        return head;

        // 节点删除
        if(cur.val == nextTmp.val){
            cur.next=nextTmp.next; // 注意nextTmp.next容许为空
            nextTmp.next=null;
        }
        else
            cur=cur.next; 

        return delete(cur,cur.next,head);    
    }
}
