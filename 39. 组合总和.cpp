class Solution {
public:
    int requireSum;
    int maxSize;
    int a[1001];
    vector<int> nums,temp;
    vector<vector<int>> res;
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        nums=candidates;
        maxSize=nums.size();
        requireSum=target;
        DFS(0,0,0);
        return res;
    }
    
    void DFS(int index,int sum,int cnt){
        
        if(index==maxSize){
            
            if(sum==requireSum){
                temp.clear();
                for(int i=0;i<cnt;i++){
                    temp.push_back(a[i]);
                }
                res.push_back(temp);
            }
            return;
        }
        
        // 选
        if(index<maxSize&&sum<requireSum){
            a[cnt]=nums[index];
            
            // 可重复选
            DFS(index,sum+nums[index],cnt+1);
        }
        
        // 不选
        DFS(index+1,sum,cnt);
    }
};
