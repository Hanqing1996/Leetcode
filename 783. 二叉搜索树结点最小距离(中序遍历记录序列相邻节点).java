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
    
    /**
     * 二叉搜索树中序遍历序列为升序数组，因此在中序遍历过程中求序列相邻节点的差值最小值即可
     */
    
    /**
     * for example
     * 对于[90,69,92,49,89,91,93,48,52]
     * pre=null,root=90
     * pre=null,root=69
     * pre=null,root=49
     * pre=null,root=48
     * pre=48,root=49
     * pre=49,root=52
     * pre=52,root=69
     * pre=69,root=89
     * pre=89,root=90
     * ......
     */
    
    public int currentMiniDiff= Integer.MAX_VALUE;
    public TreeNode pre=null;
    
    public int minDiffInBST(TreeNode root) {
        
        inOrder(root);
        return currentMiniDiff;
    }
    
    private void inOrder(TreeNode root){
        if(root!=null){
        
            inOrder(root.left);
            if(pre!=null){
                int currentDiff=root.val-pre.val;// 由于已经保证升序，所有不用加绝对值
                currentMiniDiff=Math.min(currentMiniDiff,currentDiff);
            }
            pre=root;
            inOrder(root.right);
        }
        
    }
}
