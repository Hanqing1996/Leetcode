/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode[] splitListToParts(ListNode root, int k) {
        
        // 遍历,求链表长度
        int len=0;
        ListNode p=root;
        while(p!=null){
            len++;
            p=p.next;
        }
        
        // extra_counts为多余的节点数，将均分给前extra_counts块区域
        int extra_counts=len%k;
        
        // width为每块区域的基准长度(不增加多余节点情况下)
        int width=len/k;
        
        ListNode[] Nodes=new ListNode[k];
        
        ListNode cur=root;
            
        // 分配extra个多余节点
        for(int i=0;i<extra_counts;i++){
            
            Nodes[i]=cur;
            for(int j=0;j<width;j++){
                cur=cur.next;
            }
            
            // 断链
            ListNode temp=cur.next;
            cur.next=null;
            
            cur=temp; 
        }
        
        // 处理后k-extra_counts-1块区域
        for(int i=extra_counts;i<k;i++)
        {
            Nodes[i]=cur;
            for(int j=0;j<width-1;j++){
                cur=cur.next;
            }

            if(cur==null)
                break;
            
            // 断链
            ListNode temp=cur.next;
            cur.next=null;
            
            cur=temp; 
        }
        return Nodes;
    }
}
