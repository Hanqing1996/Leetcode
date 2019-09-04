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
    
    public int sum,currentTiltSum=0;
    public int findTilt(TreeNode root) {
        preOrder(root);
        return currentTiltSum;
    }
    
     private void preOrder(TreeNode root){
        
         if(root!=null){
             
             sum=0;
             tilt(root.left);
             int leftSum=sum;
             
             sum=0;
             tilt(root.right);
             int rightSum=sum;
             
             currentTiltSum+=Math.abs(leftSum-rightSum);
          
            preOrder(root.left);
            preOrder(root.right); 
        }
    }
    
    private void tilt(TreeNode root){
        if(root!=null){
            sum+=root.val;
            
            tilt(root.left);
            tilt(root.right);
        }
    }
}
