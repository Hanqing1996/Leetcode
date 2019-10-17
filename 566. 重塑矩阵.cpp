class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& nums, int r, int c) {
        
        // m,n为原矩阵行、列数
        int m=nums.size();
        int n=nums[0].size();
        if(m*n!=r*c)
            return nums;
        
        vector<vector<int>> res(r, vector<int>(c));
        
        // 把一个矩阵赋值到另一个矩阵
        for(int i=0;i<m*n;i++){
            res[i/c][i%c]=nums[i/n][i%n];
        }
        return res;
    }
};
