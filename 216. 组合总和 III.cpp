class Solution {
public:
    int requireSum;
    int maxSize;
    int requireCount;
    int a[1001];
    vector<vector<int>> res;
    vector<int> nums,temp;
    vector<vector<int>> combinationSum3(int k, int n) {
        
        
        for(int i=1;i<=9;i++){
            nums.push_back(i);
        }
        maxSize=nums.size();
        requireSum=n;
        requireCount=k;
        DFS(0,0,0);

        return res;
    }
    void DFS(int index,int sum,int cnt){
        
        if(index==maxSize){
            if(sum==requireSum&&cnt==requireCount){
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
            
            // 不可重复选
            DFS(index+1,sum+nums[index],cnt+1);
        }
        
        // 不选
        DFS(index+1,sum,cnt);
        
    }
};

