class Solution {
public:
    vector<int> nums;
    int len;
    int requireSum;
    int res=1001;
    int numSquares(int n) {
        // 获得完全平方数数组
        for(int i=1;i<=sqrt(n);i++){
            nums.push_back(i*i);
        }
        len=nums.size();
        requireSum=n;
        DFS(0,0,0);
        return res;
    }
    void DFS(int index,int sum,int cnt){
        if(index==len){
            if(sum==requireSum){
                res=min(res,cnt);
            } 
            return;
        }
        if(index<len&&sum<requireSum){
            DFS(index,sum+nums[index],cnt+1);
        }
        DFS(index+1,sum,cnt);
    }
};
