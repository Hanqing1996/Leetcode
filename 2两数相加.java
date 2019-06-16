/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry=0;
        ListNode dummyHead=new ListNode(0);//空表头，只是为了便于返回目标链表而设立
        ListNode l3=dummyHead;
        while(l1!=null||l2!=null)//两个链表同步考虑，不要写成两个while循环，注意是null不是NULL
        {
            int p,q,sum;
            /*
            if(l1=NULL)
                p=0;
            else if(l2==NULL)
                q=0;
            else
            {
                p=l1.val;
                q=l2.val;
            }*/
            p=(l1==null)?0:l1.val;//不要用if else语句
            q=(l2==null)?0:l2.val;
            sum=p+q+carry;
            carry=sum/10;
            /* 创建新节点错误写法
            l3.val=sum%10;
            l3=l3.next;
            */
            l3.next=new ListNode(sum%10);//创建新节点正确写法:先为下一个节点赋值val，再令l3指向新节点
            l3=l3.next;
            
            //不要写l1=l1,next 会报错
            if(l1!=null) l1=l1.next;
            if(l2!=null) l2=l2.next;
        }
        if(carry>0)//最后的进位勿忘
            l3.next=new ListNode(1);//这里不需要l3=l3.next，因为l3已经指向最后一个节点
        return dummyHead.next;
    }
}
