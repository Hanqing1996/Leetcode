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
 * 两次遍历
 */
class Solution {
    
    public int longestSinglePath,longestPath=0;
    public int longestUnivaluePath(TreeNode root) {
        preorder(root);
        return longestPath;
    }
    
    public void preorder(TreeNode root){
        if(root!=null){
            
            // 求左单向最大同值路径
            longestSinglePath=0;
            path(root.left,root.val,0);
            int longLeftPath=longestSinglePath;
            
            // 求右单向最大同值路径
            longestSinglePath=0;
            path(root.right,root.val,0);
            int longRightPath=longestSinglePath;
            
            // longLeftPath+longRightPath为经过root的最大同值路径
            longestPath=Math.max(longestPath,longLeftPath+longRightPath);
            
            preorder(root.left);
            preorder(root.right);
        }
        
    }
    
    // 求单向最大同值路径
    private void path(TreeNode root,int currentValue,int pathCount){
        if(root!=null&&root.val==currentValue){
            pathCount++;
            longestSinglePath=Math.max(longestSinglePath,pathCount);
            
            path(root.left,currentValue,pathCount);
            path(root.right,currentValue,pathCount);
        }
        
    }
    
}
