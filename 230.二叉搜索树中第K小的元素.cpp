/*
 * 二叉搜索树的中序遍历结果一定为升序序列,中序遍历至第K个即可
 */

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    int ans;
    int kthSmallest(TreeNode* root, int k) {
        int num=0;
        InOrderTraverse(root,num,k);
        return ans;
    }
    
//中序遍历
void InOrderTraverse(TreeNode* T,int &num,int k)
{
    if(T){
        InOrderTraverse(T->left,num,k);
        num++;
        if(num==k){
            ans=T->val;
            return;
        }
        InOrderTraverse(T->right,num,k);
    }
    else
        return;
}
};
