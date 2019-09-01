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
