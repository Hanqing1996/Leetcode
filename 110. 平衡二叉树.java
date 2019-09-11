/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    
    public boolean bal=true;
    public boolean isBalanced(TreeNode root) {
        
        balance(root);
        
        return bal;
    }
    
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


/**
 * 二次遍历
 */
class Solution {
    
    public int currentDepth=0;
    public boolean isBalance=true;
    
    public boolean isBalanced(TreeNode root) {
        
        preorder(root);
        
        return isBalance;
    }
    
    private void preorder(TreeNode root){
        if(root!=null){
            
            // 左子树高度
            currentDepth=0;
            getDepth(root.left,0);
            int leftDepth=currentDepth;
            
            // 右子树高度
            currentDepth=0;
            getDepth(root.right,0);
            int rightDepth=currentDepth;
            
            // 左右子树高度相差超过1,判定为不是平衡二叉树
            if(Math.abs(leftDepth-rightDepth)>1)
                isBalance=false;
            
            preorder(root.left);
            preorder(root.right);
        }
    }
    
    private void getDepth(TreeNode root,int depth){
        if(root!=null)
        {
            depth+=1;
            currentDepth=Math.max(currentDepth,depth);
            
            getDepth(root.left,depth);
            getDepth(root.right,depth);
        }
    }
}
