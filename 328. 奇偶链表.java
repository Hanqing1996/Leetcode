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
    public ListNode oddEvenList(ListNode head) {
        
        // 链表长度为0,1,2;直接返回head
        if(head==null||head.next==null||head.next.next==null)
            return head;
        
        ListNode odd=head,even=head.next;
        
        
        // 保证链表长度大于等于3.链表长度为奇数:even=null时不做处理,链表长度为偶数:even.next=null时不做处理
        while(even!=null&&even.next!=null){
            
            // 删除奇数节点
            ListNode nextTmp=even.next;
            even.next=even.next.next;
            
            // 插入奇数节点
            nextTmp.next=odd.next;
            odd.next=nextTmp;
            
            // 移动even和odd
            even=even.next;
            odd=odd.next;
        }
        return head;
    }
} 

/**
 * 递归
 */
class Solution {
    public ListNode oddEvenList(ListNode head) {
        
        // 链表长度为0,1,2;直接返回head
        if(head==null||head.next==null||head.next.next==null)
            return head;
        
        ListNode odd=head,even=head.next;
        
        return oddEven(even,odd,head);
    }

    
    private ListNode oddEven(ListNode even,ListNode odd,ListNode head){

        if(even==null||even.next==null)
        return head;

        // 删除奇数节点
        ListNode nextTmp=even.next;
        even.next=even.next.next;
        
        // 插入奇数节点
        nextTmp.next=odd.next;
        odd.next=nextTmp;

        return oddEven(even.next,odd.next,head);
    }
} 
