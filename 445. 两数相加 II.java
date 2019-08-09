/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

// 没啥好思路,短链表前面补零吧
class Solution {
    
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        
        ListNode p1=l1,p2=l2;
        
        // 遍历l1,l2
        while(p1!=null&&p2!=null){
            p1=p1.next;
            p2=p2.next;
        }
        
        
        // 规定l1为长度不小于l2长度
        if(p2!=null){
            ListNode temp=l1;
            l1=l2;
            l2=temp;
            
            p1=p2;
        }        
        
        // 求补零个数
        int count=0;
        while(p1!=null)
        {
            count++;
            p1=p1.next;
        }
        
        
        // 为l2补零,这里需要借助哑节点
        ListNode dummy=new ListNode(0);
        dummy.next=l2;
        
        for(int i=0;i<count;i++)
        {
            ListNode nextTmp=dummy.next;
            
            ListNode zero_node=new ListNode(0);
            zero_node.next=nextTmp;
            dummy.next=zero_node;
        }
        
        l2=dummy.next;
        
        
        // 遍历l1,l2求和
        while(l1!=null)
        {
            l1.val+=l2.val;
            l1=l1.next;
            l2=l2.next;
        }
        return l1;
    }
}
