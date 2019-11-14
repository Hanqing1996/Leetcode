// Hash,标记哪行哪列存在０即可，空间复杂度Ｏ(1)
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int n=matrix.size(),m=matrix[0].size();
        int rows[n];
        memset(rows,1,sizeof(rows));
        memset(rows,1,n);
        int columns[m];
        memset(columns,1,sizeof(columns));

        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(matrix[i][j]==0){
                    rows[i]=0;
                    columns[j]=0;
                }
            }
        }


        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(rows[i]==0||columns[j]==0){
                    matrix[i][j]=0;
                }
            }
        }
    }
};
