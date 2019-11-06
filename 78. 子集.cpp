class Solution {
public:
    vector<int> seq,temp;
    vector<vector<int>> res;
    int targetNum,maxSize;
    int a[100];
    vector<vector<int>> subsets(vector<int>& nums) {
        seq=nums;
        maxSize=nums.size();
        DFS(0,0);
        return res;
    }
    
    void DFS(int index,int cnt){
        
        if(index==maxSize){
            temp.clear();
            for(int i=0;i<cnt;i++){
                temp.push_back(a[i]);
            }
            res.push_back(temp);
            return;
        }

        // 选
        a[cnt]=seq[index];
        DFS(index+1,cnt+1);
        
        // 不选
        DFS(index+1,cnt);
    }
};
