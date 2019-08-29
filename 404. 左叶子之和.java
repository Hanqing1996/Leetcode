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
    
    public int leftSum=0;
    public int sumOfLeftLeaves(TreeNode root) {
        
        if(root==null)
            return 0;
        if(root.left==null&&root.right==null)
            return 0;
        
        sum(root,false);
        return leftSum;
    }
    
    public void sum(TreeNode root,boolean left){
        if(root!=null){
            
            if(root.left==null&&root.right==null){
                if(left)
                    leftSum+=root.val;
            }
            
            sum(root.left,true);
            sum(root.right,false);
        }
    }
}
