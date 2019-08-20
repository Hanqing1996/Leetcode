/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
 
 /**
  * 基于先序遍历的递归
  */
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        
        return preorder(p,q);
    }
    
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
} 
