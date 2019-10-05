class Solution {
public:
    /**
     * 以s = "paper", t = "title"为例
     * 对于s来说,第0,2个字符相同;那么就要求作为同构字符串的t也满足第0,2个字符相同
     */
    bool isIsomorphic(string s, string t) {
        
        // 下标与初次出现位置的映射
        int position[100001];
        
        // 字符与初次出现位置的映射
        int Hash[256];
        memset(Hash,-1,sizeof(Hash));
        
        for(int i=0;i<s.size();i++){
            if(Hash[s[i]]==-1){
                Hash[s[i]]=i;
                position[i]=i;
            }
            else
                position[i]=Hash[s[i]];
        }
        
        memset(Hash,-1,sizeof(Hash));
        
        for(int i=0;i<t.size();i++){
            
            if(Hash[t[i]]==-1)
                Hash[t[i]]=i;
            
            // t[i]不是第一次出现，但在s中，s[i]是第一次出现
            if(Hash[t[i]]!=i&&position[i]==i)
                return false;
            
            // 排除上面那种情况，只需要判断t[i]与t[position[i]]是否相同
            if(t[i]!=t[position[i]])
                return false;
        }
        return true;
    }
};
