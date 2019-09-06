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
    
    public int maxSum=-9999,maxSingleSum=-9999;
    public int maxPathSum(TreeNode root) {
        preorder(root);
        return maxSum;
    }
    
     private void preorder(TreeNode root){
        if(root!=null){
            
            // 求左单向最大节点和
            maxSingleSum=0;
            sum(root.left,0);
            int maxLeftSum=maxSingleSum;
            
            // 求右单向最大节点和
            maxSingleSum=0;
            sum(root.right,0);
            int maxRightSum=maxSingleSum;
            
            // longLeftPath+longRightPath为经过root的最大路径
            maxSum=Math.max(maxSum,maxLeftSum+maxRightSum+root.val);
            
            preorder(root.left);
            preorder(root.right);
        }
        
    }
    
    private void sum(TreeNode root,int nodeSum){
        if(root!=null){
            nodeSum+=root.val;
            maxSingleSum=Math.max(maxSingleSum,nodeSum);
            
            sum(root.left,nodeSum);
            sum(root.right,nodeSum);
        }
        
    }
  
}
