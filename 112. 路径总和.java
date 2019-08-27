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
    
    public boolean ifHaspath=false;
    public int requireSum=0;
    
    public boolean hasPathSum(TreeNode root, int sum) {
        
        if(root==null&&sum==0)
            return false;
        
        requireSum=sum;
        hasPath(root,0);
        return ifHaspath;
    }
    
    private void hasPath(TreeNode root, int currentSum){
        
      if(root!=null){
          
        if(root.left==null&&root.right==null){
            if(requireSum==(currentSum+root.val))
                ifHaspath=true;
        }  

        hasPath(root.left,currentSum+root.val);
        hasPath(root.right,currentSum+root.val);
      }

    }
}
