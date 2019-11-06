class Solution {
public:
    vector<int> nums;
    string res="";
    bool vest[1001]={false};
    int a[1001];
    int len;
    int cnt=0;
    int seq;
    string getPermutation(int n, int k) {
        for(int i=1;i<=n;i++){
            nums.push_back(i);
        }
        len=n;
        seq=k;
        DFS(0);
        return res;
    }
    
    void DFS(int x){
        
        // 到达叶节点
        if(x==len){
            cnt++;
            
            // 如果是第k个排列
            if(cnt==seq){
                
                for(int i=0;i<len;i++){
                    res+=a[i]+'0';
                }
            }
        }
        for(int i=0;i<len;i++){
            if(vest[i]==false){
                a[x]=nums[i];
                vest[i]=true;
                DFS(x+1);
                vest[i]=false;
            }
        }
        
    }
};
