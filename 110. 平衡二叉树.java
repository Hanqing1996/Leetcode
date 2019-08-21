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
