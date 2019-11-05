class Solution {
public:
    vector<vector<int>> res;
    vector<int> seq,temp;
    bool vest[1001]={false};
    int a[1001];
    int len;
    vector<vector<int>> permute(vector<int>& nums) {
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
            if(vest[i]==false){
                a[x]=seq[i];
                vest[i]=true;
                DFS(x+1);
                vest[i]=false;
            }
        }
        
    }
};
