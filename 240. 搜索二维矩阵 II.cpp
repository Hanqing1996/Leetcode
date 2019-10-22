// 视matrix[0]的所有元素为标记点，按标记点从大到小横向搜索target,遇到当前标记点小于target,则纵向搜索
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        
        
        if(matrix.empty()||matrix[0].empty())
            return false;
        
        int m=matrix.size();
        int n=matrix[0].size();
        
        
        int row=0,col=n-1;
        while(row<m&&col>=0){
        if(matrix[row][col]==target)
        return true;
        else if(matrix[row][col]>target)
        col--;
        else
        row++;
        }
        return false;
    }
};
