// 直接找全排列，满足条件则加一
class Solution {
public:
    int count=0;
    int a[1001];
    bool vest[1001];
    vector<int> nums;
    int len;
    int countArrangement(int N) {
        for(int i=1;i<=N;i++){
            nums.push_back(i);
        }
        len=N; 
        DFS(0);
        return count;
    }
    void DFS(int x){
        
        if(x==len){
            count++;
            return;    
        }

        for(int i=0;i<len;i++){
            // 需要剪枝,否则超时
            if(vest[i]==false&&(nums[i]%(x+1)==0||(x+1)%nums[i]==0)){
                a[x]=nums[i];
                vest[i]=true;
                DFS(x+1);
                vest[i]=false;
            }
        }
    }
};
