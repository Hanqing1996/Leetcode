class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        
        int size=strs.size();
        int len=0;
        bool end=false;
        
        if(size==0)
            return "";
        
        while(end==false){
            
            if(len==strs[0].size()){
                end=true;
                continue;
            }
            
            string current=strs[0].substr(len,1);
            
            for(int i=1;i<size;i++){
                if(strs[i].substr(len,1)!=current||len==strs[i].size()){
                    end=true;
                    break;
                }
            }
            if(end==false)
                len++;
        }
        return strs[0].substr(0,len);
    }
};
