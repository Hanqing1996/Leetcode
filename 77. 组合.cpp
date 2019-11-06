class Solution {
public:
    vector<int> nums,temp;
    vector<vector<int>> res;
    int targetNum,maxSize;
    int a[100];
    vector<vector<int>> combine(int n, int k) {
        for(int i=1;i<=n;i++){
            nums.push_back(i);
        }
        targetNum=k;
        maxSize=n;
        DFS(0,0);
        return res;
    }
    void DFS(int index,int cnt){
        
        if(index==maxSize){
            
            if(cnt==targetNum){
                temp.clear();
                for(int i=0;i<cnt;i++){
                    temp.push_back(a[i]);
                }
                res.push_back(temp);
            }
            return;
        }

        // 选
        if(cnt<=targetNum-1){
            a[cnt]=nums[index];
            DFS(index+1,cnt+1);
        }
        
        // 不选
        DFS(index+1,cnt);
    }
};
