class Solution {
public:
    /**
     * 寻找右边比自己大的最近数
     * 逆序查找
     */
    vector<int> dailyTemperatures(vector<int>& T) {
        int n=T.size();
        vector<int> res(n);
        res[n-1]=0;
        for(int i=n-2;i>=0;i--){
            for(int temp=i+1;temp<n;temp+=res[temp]){
                if(T[i]<T[temp]){
                    res[i]=temp-i;
                    break;
                } else if(res[temp]==0){
                    res[i]=0;
                    break;
                }
            }
        }
        return res;
    }     
};
