[coding地址](https://coding.net/u/usx15237/p/LeetCode/git)

#### 空间复杂度
* 不需要额外的空间是指的算法的空间复杂度为O(1)级别
    * int result=2 就是不需要额外的空间
    * int arr[n] 就是需要额外的空间
* 原地修改数组
```
for(int i=1;i<nums.size();i++){
   if(nums[i]!=nums[i-1]){
       nums[count]=nums[i-1];
       nums[++count]=nums[i];
   }
}
```

#### memset
```
int Hash[256];
memset(Hash,-1,sizeof(Hash));
```

#### 最值
* java
```
Integer.MAX_VALUE
Integer.MIN_VALUE
```
* c++
```
INT_MIN
INT_MAX
```

#### 数组
[26. 删除排序数组中的重复项](https://github.com/Hanqing1996/Leetocde/blob/master/26.%20%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9.cpp)

#### 异或：相同为0，不同为1
1. 0 ^ a = a
2. 0 ^ 1 = 1; 0 ^ 0 = 0; 1 ^ 1 = 0; 1 ^ 0 =1
3. 交换律：a ^ b ^ c <=> a ^ c ^ b
```
int ans =11;
ans=ans ^ 12; // ans=7
```
* [136. 只出现一次的数字](https://github.com/Hanqing1996/Leetocde/blob/master/136.%20%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97.cpp)

#### 排序
* [215. 数组中的第K个最大元素](https://github.com/Hanqing1996/Leetocde/blob/master/215.%20%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E7%AC%ACK%E4%B8%AA%E6%9C%80%E5%A4%A7%E5%85%83%E7%B4%A0.Java)
* 
#### 二分查找 
* [35. 搜索插入位置](https://github.com/Hanqing1996/Leetocde/blob/master/35.%20%E6%90%9C%E7%B4%A2%E6%8F%92%E5%85%A5%E4%BD%8D%E7%BD%AE.cpp)
* [367. 有效的完全平方数](https://github.com/Hanqing1996/Leetocde/blob/master/367.%20%E6%9C%89%E6%95%88%E7%9A%84%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0.cpp)
* [374. 猜数字大小](https://github.com/Hanqing1996/Leetocde/blob/master/374.%20%E7%8C%9C%E6%95%B0%E5%AD%97%E5%A4%A7%E5%B0%8F.cpp)
* [744. 寻找比目标字母大的最小字母](https://github.com/Hanqing1996/Leetocde/blob/master/744.%20%E5%AF%BB%E6%89%BE%E6%AF%94%E7%9B%AE%E6%A0%87%E5%AD%97%E6%AF%8D%E5%A4%A7%E7%9A%84%E6%9C%80%E5%B0%8F%E5%AD%97%E6%AF%8D.cpp)
* [852. 山脉数组的峰顶索引](https://github.com/Hanqing1996/Leetocde/blob/master/852.%20%E5%B1%B1%E8%84%89%E6%95%B0%E7%BB%84%E7%9A%84%E5%B3%B0%E9%A1%B6%E7%B4%A2%E5%BC%95.cpp)
* [540. 有序数组中的单一元素](https://github.com/Hanqing1996/Leetocde/blob/master/540.%20%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%8D%95%E4%B8%80%E5%85%83%E7%B4%A0.java)
* [69. x 的平方根](https://github.com/Hanqing1996/Leetocde/blob/master/69.%20x%20%E7%9A%84%E5%B9%B3%E6%96%B9%E6%A0%B9.cpp)
* [278. 第一个错误的版本](https://github.com/Hanqing1996/Leetocde/blob/master/278.%20%E7%AC%AC%E4%B8%80%E4%B8%AA%E9%94%99%E8%AF%AF%E7%9A%84%E7%89%88%E6%9C%AC.cpp)
* [153. 寻找旋转排序数组中的最小值](https://github.com/Hanqing1996/Leetocde/blob/master/153.%20%E5%AF%BB%E6%89%BE%E6%97%8B%E8%BD%AC%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%9C%80%E5%B0%8F%E5%80%BC.cpp)
* [34. 在排序数组中查找元素的第一个和最后一个位置](https://github.com/Hanqing1996/Leetocde/blob/master/34.%20%E5%9C%A8%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9F%A5%E6%89%BE%E5%85%83%E7%B4%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%92%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E4%BD%8D%E7%BD%AE.cpp)
#### 双指针
* [167. 两数之和 II - 输入有序数组](https://github.com/Hanqing1996/Leetocde/blob/master/167.%20%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C%20II%20-%20%E8%BE%93%E5%85%A5%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84.cpp)
* [345. 反转字符串中的元音字母](https://github.com/Hanqing1996/Leetocde/blob/master/345.%20%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E5%85%83%E9%9F%B3%E5%AD%97%E6%AF%8D.cpp)
* [524. 通过删除字母匹配到字典里最长单词](https://github.com/Hanqing1996/Leetocde/blob/master/524.%20%E9%80%9A%E8%BF%87%E5%88%A0%E9%99%A4%E5%AD%97%E6%AF%8D%E5%8C%B9%E9%85%8D%E5%88%B0%E5%AD%97%E5%85%B8%E9%87%8C%E6%9C%80%E9%95%BF%E5%8D%95%E8%AF%8D.java)
* [633. 平方数之和](https://github.com/Hanqing1996/Leetocde/blob/master/633.%20%E5%B9%B3%E6%96%B9%E6%95%B0%E4%B9%8B%E5%92%8C.cpp)
* [680. 验证回文字符串 Ⅱ](https://github.com/Hanqing1996/Leetocde/blob/master/680.%20%E9%AA%8C%E8%AF%81%E5%9B%9E%E6%96%87%E5%AD%97%E7%AC%A6%E4%B8%B2%20%E2%85%A1.cpp)
* [88. 合并两个有序数组](https://github.com/Hanqing1996/Leetocde/blob/master/88.%20%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84.cpp)
* [19. 删除链表的倒数第N个节点](https://github.com/Hanqing1996/Leetocde/blob/master/19.%20%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%ACN%E4%B8%AA%E8%8A%82%E7%82%B9.java)

#### 贪心
*
#### 动态规划
* [121. 买卖股票的最佳时机](https://github.com/Hanqing1996/Leetocde/blob/master/121%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.java)
* [3. 无重复字符的最长子串](https://github.com/Hanqing1996/Leetocde/blob/master/3.%20%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.cpp)
#### 链表
* 空指针异常
```
first.next报错 // first=null

first.next.next报错 // first.next.next=null
```
* 范例
```
// 24. 两两交换链表中的节点
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
```
* [141. 环形链表](https://github.com/Hanqing1996/Leetocde/blob/master/141.%20%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8.cpp)
* [2. 两数相加](https://github.com/Hanqing1996/Leetocde/blob/master/2%E4%B8%A4%E6%95%B0%E7%9B%B8%E5%8A%A0.java)
* [206. 反转链表](https://github.com/Hanqing1996/Leetocde/blob/master/206.%20%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.java)
* [21. 合并两个有序链表](https://github.com/Hanqing1996/Leetocde/blob/master/21.%20%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8.java)
* [83. 删除排序链表中的重复元素](https://github.com/Hanqing1996/Leetocde/blob/master/83.%20%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0.java)
* [24. 两两交换链表中的节点](https://github.com/Hanqing1996/Leetocde/blob/master/24.%20%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.java)
* [445. 两数相加 II](https://github.com/Hanqing1996/Leetocde/blob/master/445.%20%E4%B8%A4%E6%95%B0%E7%9B%B8%E5%8A%A0%20II.java)
* [234. 回文链表](https://github.com/Hanqing1996/Leetocde/blob/master/234.%20%E5%9B%9E%E6%96%87%E9%93%BE%E8%A1%A8.java)
* [725. 分隔链表](https://github.com/Hanqing1996/Leetocde/blob/master/725.%20%E5%88%86%E9%9A%94%E9%93%BE%E8%A1%A8.java)
* [328. 奇偶链表](https://github.com/Hanqing1996/Leetocde/blob/master/328.%20%E5%A5%87%E5%81%B6%E9%93%BE%E8%A1%A8.java)
#### 树
* [230. 二叉搜索树中第K小的元素](https://github.com/Hanqing1996/Leetocde/blob/master/230.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%AC%ACK%E5%B0%8F%E7%9A%84%E5%85%83%E7%B4%A0.cpp)
* [104. 二叉树的最大深度](https://github.com/Hanqing1996/Leetocde/blob/master/104.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6)

#### 链表的递归
* [206. 反转链表](https://github.com/Hanqing1996/Leetocde/blob/master/206.%20%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.java)
* [24. 两两交换链表中的节点](https://github.com/Hanqing1996/Leetocde/blob/master/24.%20%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.java)
* [83. 删除排序链表中的重复元素](https://github.com/Hanqing1996/Leetocde/blob/master/83.%20%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0.java)
* [328. 奇偶链表](https://github.com/Hanqing1996/Leetocde/blob/master/328.%20%E5%A5%87%E5%81%B6%E9%93%BE%E8%A1%A8.java)

#### 二叉树(递归)
* [递归detail](https://www.jianshu.com/p/a33b420d660d)
1. 只能从父节点到子节点/子树(437,)：可以用两次遍历
2. 这条路径可以经过也可以不经过根节点(124,687,543)：将“求经过该根节点的，满足题目要求的路径”转化为“根节点的left单向路径+根节点的right单向路径=满足题目要求的路径”
3. 注意两次遍历要求第二次遍历不能是有选择的，不确定的(比如337就不能用二次遍历)。而且两次遍历的效率是很低的，很暴力，没有优化。
```
path(root.left) 
...
path(root.right)
``` 

![image](https://github.com/Hanqing1996/Leetocde/blob/master/images/binaryTree.jpg)
1. 先序遍历(二叉树路径/最大深度)：[1 2 4 8 9 5 10 11 3 6 7]
2. 中序遍历(二叉搜索树中序遍历序列为升序数组)：[8 4 9 2 10 5 11 1 6 3 7]
3. 后序遍历(平衡二叉树)：[8 9 4 10 11 5 2 6 7 3 1]
* [100 相同的树](https://github.com/Hanqing1996/Leetocde/blob/master/100.%20%E7%9B%B8%E5%90%8C%E7%9A%84%E6%A0%91.java)
```
/**
 * boolean类型的递归函数
 */
private boolean preorder(TreeNode p, TreeNode q){
        if(p!=null&&q!=null)
        {
            if(p.val!=q.val)
                return false;
            else
                return preorder(p.left,q.left)&&preorder(p.right,q.right);
        }
        else if((p!=null&&q==null)||(p==null&&q!=null))
            return false;
        else
            return true;
    }
```
* [110 平衡二叉树](https://github.com/Hanqing1996/Leetocde/blob/master/110.%20%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91.java) 
```
class Solution {
    
    public boolean bal=true;
    public boolean isBalanced(TreeNode root) {
        
        balance(root);
        
        return bal;
    }
    
    /**
     * 自下向上
     */
    private int balance(TreeNode p){
        
        if(p!=null&&bal){
            int left_depth=balance(p.left);
            int right_depth=balance(p.right);
            
            if(Math.abs(left_depth-right_depth)>1){
                bal=false;
                return 0; // 这里return什么根本不重要
            }
            else
                return Math.max(left_depth,right_depth)+1;
        }
        else
            return 0;
    }   
}
```
* [617. 合并二叉树](https://github.com/Hanqing1996/Leetocde/blob/master/617.%20%E5%90%88%E5%B9%B6%E4%BA%8C%E5%8F%89%E6%A0%91.java)
```
class Solution {
    
    // 返回类型为TreeNode的递归函数
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        
        if(t1!=null&&t2!=null){
            t1.val+=t2.val;
            
            t1.left=merge(t1.left,t2.left);
            t1.right=merge(t1.right,t2.right);

            return t1; // 这一句会多次执行
        }
        else if(t1==null&&t2!=null){
            return t2;
        }
        else
            return t1;
    }
    
}
```
* [104. 二叉树的最大深度(自上向下)](https://github.com/Hanqing1996/Leetocde/blob/master/104.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6)
* [111. 二叉树的最小深度(自上向下)](https://github.com/Hanqing1996/Leetocde/blob/master/111.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E6%B7%B1%E5%BA%A6.java)
* [101. 对称二叉树](https://github.com/Hanqing1996/Leetocde/blob/master/101.%20%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.java)
* [226. 翻转二叉树(返回类型为TreeNode的递归函数)](https://github.com/Hanqing1996/Leetocde/blob/master/226.%20%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91.java)
* [938. 二叉搜索树的范围和](https://github.com/Hanqing1996/Leetocde/blob/master/938.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E8%8C%83%E5%9B%B4%E5%92%8C)
* [543. 二叉树的直径](https://github.com/Hanqing1996/Leetocde/blob/master/543.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%9B%B4%E5%BE%84(%E4%B8%A4%E6%AC%A1%E9%81%8D%E5%8E%86%E6%95%88%E7%8E%87%E4%B8%8D%E5%A6%82%E4%B8%80%E6%AC%A1).java)
* [112. 路径总和](https://github.com/Hanqing1996/Leetocde/blob/master/112.%20%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.java)
* [437. 路径总和 III(两次遍历)](https://github.com/Hanqing1996/Leetocde/blob/master/437.%20%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C%20III.java)
* [572. 另一个树的子树(两次遍历,与100相似)](https://github.com/Hanqing1996/Leetocde/blob/master/572.%20%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A0%91%E7%9A%84%E5%AD%90%E6%A0%91.java)
* [563. 二叉树的坡度(两次遍历)](https://github.com/Hanqing1996/Leetocde/blob/master/563.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%9D%A1%E5%BA%A6.java)
* [124. 二叉树中的最大路径和(两次遍历,与543类似)](https://github.com/Hanqing1996/Leetocde/blob/master/124.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E7%9A%84%E6%9C%80%E5%A4%A7%E8%B7%AF%E5%BE%84%E5%92%8C.java)
* [110 平衡二叉树(两次遍历)](https://github.com/Hanqing1996/Leetocde/blob/master/110.%20%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91.java) )
* [404. 左叶子之和](https://github.com/Hanqing1996/Leetocde/blob/master/404.%20%E5%B7%A6%E5%8F%B6%E5%AD%90%E4%B9%8B%E5%92%8C.java)
* [687. 最长同值路径](https://github.com/Hanqing1996/Leetocde/blob/master/687.%20%E6%9C%80%E9%95%BF%E5%90%8C%E5%80%BC%E8%B7%AF%E5%BE%84.java)
* [671. 二叉树中第二小的节点](https://github.com/Hanqing1996/Leetocde/blob/master/671.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E7%AC%AC%E4%BA%8C%E5%B0%8F%E7%9A%84%E8%8A%82%E7%82%B9.java)
* [965. 单值二叉树](https://github.com/Hanqing1996/Leetocde/blob/master/965.%20%E5%8D%95%E5%80%BC%E4%BA%8C%E5%8F%89%E6%A0%91.java)
* [129. 求根到叶子节点数字之和](https://github.com/Hanqing1996/Leetocde/blob/master/129.%20%E6%B1%82%E6%A0%B9%E5%88%B0%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9%E6%95%B0%E5%AD%97%E4%B9%8B%E5%92%8C)
* [872. 叶子相似的树(java判断两个数组相同)](https://github.com/Hanqing1996/Leetocde/blob/master/872.%20%E5%8F%B6%E5%AD%90%E7%9B%B8%E4%BC%BC%E7%9A%84%E6%A0%91.java)

#### 二叉搜索树
* [669 修剪二叉搜索树(返回类型为TreeNode的递归函数)](https://github.com/Hanqing1996/Leetocde/blob/master/669.%20%E4%BF%AE%E5%89%AA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.java)
```
class Solution {
    public TreeNode trimBST(TreeNode root, int L, int R) {
       
        // 边界
        if(root==null)
            return null;
        
        // 讨论root的取值,按照不同情形返回不同的值
        if(root.val>=L&&root.val<=R){
            root.left=trimBST(root.left,L,R);
            root.right=trimBST(root.right,L,R);
            return root;
        }else if(root.val<L){
            return trimBST(root.right,L,R);    
        }else{
            return trimBST(root.left,L,R);
            }
    }
}
```
* [783. 二叉搜索树结点最小距离(中序遍历，记录序列相邻节点)](https://github.com/Hanqing1996/Leetocde/blob/master/783.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%BB%93%E7%82%B9%E6%9C%80%E5%B0%8F%E8%B7%9D%E7%A6%BB(%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E8%AE%B0%E5%BD%95%E5%BA%8F%E5%88%97%E7%9B%B8%E9%82%BB%E8%8A%82%E7%82%B9).java)
* [98. 验证二叉搜索树(中序遍历，记录序列相邻节点)](https://github.com/Hanqing1996/Leetocde/blob/master/98.%20%E9%AA%8C%E8%AF%81%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.java)
* [99. 恢复二叉搜索树(中序遍历，记录序列相邻节点)](https://github.com/Hanqing1996/Leetocde/blob/master/99.%20%E6%81%A2%E5%A4%8D%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.java)
* [700. 二叉搜索树中的搜索](https://github.com/Hanqing1996/Leetocde/blob/master/700.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E6%90%9C%E7%B4%A2.java)

[执行出错：AddressSanitizer](https://blog.csdn.net/lym940928/article/details/89678727)

#### 树的DFS,BFS,回溯


#### 关于二叉搜索树的遍历
* 中序遍历：结果一定为升序序列，运用详见[230. 二叉搜索树中第K小的元素](https://github.com/Hanqing1996/Leetocde/blob/master/230.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%AC%ACK%E5%B0%8F%E7%9A%84%E5%85%83%E7%B4%A0.cpp)
* 前序遍历：结果序列的最后一个元素一定为树中最大元素
* 后序遍历：结果序列的第一个元素一定为树中最小元素
***

#### DP
* 不连续
```
if(A[i]==B[j]){
    dp[i][j]=dp[i-1][j-1]+1;
}
else{
    dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
}
```
比如
```
对于
[2,6,7,4,1,8],
[4,3,2,7,5,4]
不连续:有dp[1][2]=max(dp[0][2],dp[1][1])=1;则dp[2][3]=dp[1][2]+1=2
连续:dp[2][3]=dp[1][2]+1=0+1=1
```
* 连续
```
if(A[i]==B[j]){
    dp[i][j]=dp[i-1][j-1]+1;
}
```
* 5. 最长回文子串
```
class Solution {
public:
    string longestPalindrome(string s) {
        int size = s.size();
        if (size < 2) {
            return s;
        }
        bool dp[size][size];        
        int maxLen = 1, start = 0;
        
        // 这个双层遍历实现了查找原先字符串的所有子串,注意它做到了先判断dp[8][8],再判断dp[7][9]
        for (int i = 0; i < size; ++i) {
            dp[i][i] = true; //单个字符本身
            for (int j = 0; j < i; ++j) {
                if (s[i] == s[j] && (i - j == 1 || dp[j+1][i-1])) {
                    dp[j][i] = true;
                    if (i - j + 1 > maxLen) {
                        maxLen = i - j + 1;
                        start = j;
                    }
                } else {
                    dp[j][i] = false;
                }
            }
        }
        return s.substr(start, maxLen);
    }
};
```
* [300. 最长上升子序列(不连续)](https://github.com/Hanqing1996/Leetocde/blob/master/300.%20%E6%9C%80%E9%95%BF%E4%B8%8A%E5%8D%87%E5%AD%90%E5%BA%8F%E5%88%97.cpp)
* [53. 最大子序和(连续)](https://github.com/Hanqing1996/Leetocde/blob/master/53.%20%E6%9C%80%E5%A4%A7%E5%AD%90%E5%BA%8F%E5%92%8C.cpp)
* [718. 最长重复子数组(连续)](https://github.com/Hanqing1996/Leetocde/blob/master/718.%20%E6%9C%80%E9%95%BF%E9%87%8D%E5%A4%8D%E5%AD%90%E6%95%B0%E7%BB%84.java)
* [70. 爬楼梯(斐波那切数列)](https://github.com/Hanqing1996/Leetocde/blob/master/70.%20%E7%88%AC%E6%A5%BC%E6%A2%AF.cpp)
* [62. 不同路径](https://github.com/Hanqing1996/Leetocde/blob/master/62.%20%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.cpp) 
* [64. 最小路径和](https://github.com/Hanqing1996/Leetocde/blob/master/64.%20%E6%9C%80%E5%B0%8F%E8%B7%AF%E5%BE%84%E5%92%8C.cpp)
* [198. 打家劫舍](https://github.com/Hanqing1996/Leetocde/blob/master/198.%20%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D.cpp)
* [213. 打家劫舍 II](https://github.com/Hanqing1996/Leetocde/blob/master/213.%20%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D%20II.cpp)
* [303. 区域和检索 - 数组不可变](https://github.com/Hanqing1996/Leetocde/blob/master/303.%20%E5%8C%BA%E5%9F%9F%E5%92%8C%E6%A3%80%E7%B4%A2%20-%20%E6%95%B0%E7%BB%84%E4%B8%8D%E5%8F%AF%E5%8F%98)
* [392. 判断子序列](https://github.com/Hanqing1996/Leetocde/blob/master/392.%20%E5%88%A4%E6%96%AD%E5%AD%90%E5%BA%8F%E5%88%97.cpp)
* [9. 回文数](https://github.com/Hanqing1996/Leetocde/blob/master/9.%20%E5%9B%9E%E6%96%87%E6%95%B0.cpp)
* [696. 计数二进制子串](https://github.com/Hanqing1996/Leetocde/blob/master/696.%20%E8%AE%A1%E6%95%B0%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AD%90%E4%B8%B2.cpp)

#### 树形dp
* 整体观([337. 打家劫舍 III](https://github.com/Hanqing1996/Leetocde/blob/master/337.%20%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D%20III.java))
```
     3
    / \
   2   7
    \   \ 
     6   1
 ```
 1. 正确思路:看作(节点3+以2为根节点的左子树+以7为根节点的左子树
如果我们取3，那么左子树root.left 和 右子树root.right我们都不能取了；如果我们不取，那么最大值来自于左右子树的和，也就是3.left+3.right。但是对于左右子树来说，又涉及到了上面的问题，我们是取还是不取呢？这样循环递推下去，直到节点为null，我们直接返回0即可。那么我们对于每个节点，都要设计一个结构来描述取和不取这样的操作
2. 错误思路:看作(节点3+节点2+节点7)
如果3取，则2，7不能取。然后呢?6,7要不要取呢?感觉好复杂
```
class Solution {
    public int rob(TreeNode root) {
    
        // 一开始是可以偷的，所以flag=1
        return robCurrentNode(1, root);
    }
    public int robCurrentNode(int flag, TreeNode root) {
        if (root == null) return 0;

        // 如果当前节点可以偷,return 偷左右子树的情况下.max(不偷当前节点,偷当前节点)
        if (flag == 1) return Math.max(robCurrentNode(1, root.left)+robCurrentNode(1, root.right), robCurrentNode(0, root.left)+robCurrentNode(0, root.right)+root.val);

        // 如果当前节点不可以偷,return  偷左右子树.不偷当前节点
        else return robCurrentNode(1, root.left)+robCurrentNode(1, root.right);
    }
}
```

#### 字符串
* [14. 最长公共前缀(substr)](https://github.com/Hanqing1996/Leetocde/blob/master/14.%20%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%89%8D%E7%BC%80.cpp)
* [242. 有效的字母异位词(hash)](https://github.com/Hanqing1996/Leetocde/blob/master/242.%20%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.cpp)
* [28. 实现 strStr()(substr)](https://github.com/Hanqing1996/Leetocde/blob/master/28.%20%E5%AE%9E%E7%8E%B0%20strStr().cpp)
* [409. 最长回文串(hash)](https://github.com/Hanqing1996/Leetocde/blob/master/409.%20%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E4%B8%B2.cpp)
* [205. 同构字符串(hash)](https://github.com/Hanqing1996/Leetocde/blob/master/205.%20%E5%90%8C%E6%9E%84%E5%AD%97%E7%AC%A6%E4%B8%B2.cpp)

#### Hash
* [217. 存在重复元素](https://github.com/Hanqing1996/Leetocde/blob/master/217.%20%E5%AD%98%E5%9C%A8%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0.cpp)
* [594. 最长和谐子序列](https://github.com/Hanqing1996/Leetocde/blob/master/594.%20%E6%9C%80%E9%95%BF%E5%92%8C%E8%B0%90%E5%AD%90%E5%BA%8F%E5%88%97.cpp)


#### 观察规律
* [122. 买卖股票的最佳时机 II](https://github.com/Hanqing1996/Leetocde/blob/master/122.%20%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA%20II.java)
* [1025. 除数博弈](https://github.com/Hanqing1996/Leetocde/blob/master/1025.%20%E9%99%A4%E6%95%B0%E5%8D%9A%E5%BC%88.cpp)

#### 关于指针
* 指针的用法
```
#include<iostream>
using namespace std;
