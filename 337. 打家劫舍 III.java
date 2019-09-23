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
 * 注意不一定根节点不选，两个子节点就一定都会入选,比如[2,7,1,null,null,null,7],最大收益序列为[7,7]
 * 两次遍历行不通，因为第二次遍历是不确定的，有选择的
 */
class Solution {
    public int rob(TreeNode root) {
        return robCurrentNode(1, root);
    }
    public int robCurrentNode(int flag, TreeNode root) {
        if (root == null) return 0;

        // 如果当前节点可以偷,return 偷左右子树的情况下.max(不偷当前节点,偷当前节点)
        if (flag == 1) return Math.max(robCurrentNode(1, root.left)+robCurrentNode(1, root.right), robCurrentNode(0, root.left)+robCurrentNode(0, root.right)+root.val);

        // 如果当前节点不可以偷,return  偷左右子树.不偷当前节点
        else return robCurrentNode(1, root.left)+robCurrentNode(1, root.right);
    }
}
