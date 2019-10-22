class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        
        if(matrix.empty()||matrix[0].empty())
            return false;
        
        int row=matrix.size();
        int col=matrix[0].size();
        
        int low=0,high=row*col-1;
        
        while(low<=high){
            int mid=(low+high)/2;
            if(matrix[mid/col][mid%col]==target)
                return true;
            else if(matrix[mid/col][mid%col]<target)
                low=mid+1;
            else
                high=mid-1;
        }
        return false;
    }
};
