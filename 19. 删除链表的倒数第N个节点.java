/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

/**
 * 双指针实现，注意巧妙之处有二
 * 1. 使用为空的dummy节点，避免了对删除head节点的情况做单独的判断
 * 2. second最终不指向被删除节点，而是被删除节点的前驱节点，这是为了便于删除节点操作
 */


// 假设头节点不为空节点
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        
        // 故意加一个哑节点(为空)，这是因为存在head节点(第一个非空节点)被删除的情况(比如长度为4的链表要删除倒数第四个节点)
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode second=head,first=head;
        
        // 初始位置:second指向head节点,first距离head n个节点处
        int count=0; 
        while(count<n)
        {
            first=first.next;
            count++;
        }
        
        // 同时移动first与second指针，直至first指向最后一个节点
        while(first.next!=null)
        {
            first=first.next;
            second=second.next;
        }
        
        // 此时second指向倒数第n个节点的前驱节点，删除指向倒数第n个节点即可
        second.next=second.next.next;
        
        // 处理删除head节点的情况
        head=dummy.next;
        
        return head;
    }
}
