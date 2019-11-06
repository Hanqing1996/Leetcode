//基本难点就是要去掉重复的
    //以这个[1,1,2]为例
    //正常会返回6个结果：其中第一行是以下标为0的1开始，而第二行是以下标为1的1开始。
    //1，1，2；1，2，1
    //1，1，2；1，2，1
    //2，1，1；2，1，1
    //去重做法就是，在dfs时要判断i和i-1是否相等和i-1这个值是否被用。
    //相等和没有被用就跳过这个i的情况，直接去i+1判断。
    //因为没被用的话，之后就可以再用这个i-1，那就会出现重复的情况。
    //比如说第二行是i=1时的判断，此时i和i-1的值相等，且i-1的值没被用
    //那么跳过i=1这个情况，直接去i=2，所以我们就去掉了第二行所有重复的。
class Solution {
public:
    vector<vector<int>> res;
    vector<int> seq,temp;
    bool vest[1001]={false};
    int a[1001];
    int len;
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        seq=nums;
        len=seq.size();
        
        DFS(0);
        return res;
    }
    
    void DFS(int x){
        
        if(x==len){
            temp.clear();
            for(int j=0;j<x;j++){
                temp.push_back(a[j]);
            }
            res.push_back(temp);
            
        }
        for(int i=0;i<len;i++){
            
            if(i>0&&vest[i-1]==false&&seq[i]==seq[i-1])
                continue;
            
            if(vest[i]==false){
                a[x]=seq[i];
                vest[i]=true;
                DFS(x+1);
                vest[i]=false;
            }
        }
        
    }
};
