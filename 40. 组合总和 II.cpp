class Solution {
public:
    int requireSum;
    int maxSize;
    int a[1001];
    set<vector<int>> se;
    vector<int> nums,temp;
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        nums=candidates;
        maxSize=nums.size();
        requireSum=target;
        DFS(0,0,0);
        vector<vector<int>> res;
        for(auto it=se.begin();it!=se.end();it++){
            res.push_back(*it);
        }
        return res;
    }
    
    void DFS(int index,int sum,int cnt){
        
        if(index==maxSize){
            
            if(sum==requireSum){
                temp.clear();
                for(int i=0;i<cnt;i++){
                    temp.push_back(a[i]);
                }
                sort(temp.begin(),temp.end());
                se.insert(temp);
            }
            return;
        }
        
        // 选
        if(index<maxSize&&sum<requireSum){
            a[cnt]=nums[index];
            
            // 不可重复选
            DFS(index+1,sum+nums[index],cnt+1);
        }
        
        // 不选
        DFS(index+1,sum,cnt);
    }
};
