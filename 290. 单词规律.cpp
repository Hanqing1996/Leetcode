class Solution {
public:
    bool wordPattern(string pattern, string str) {

        int first[26];
        memset(first,-1,sizeof(first));
        
        int len=str.size();
        int pos=0;

        vector<string> words;
        
        while(pos!=-1){
            pos=str.find_first_of(' ');
            words.push_back(str.substr(0,pos));
            str=str.substr(pos+1,len-pos-1);
        }
        
        vector<int> position;
        map<string,bool> diff;
        
        if(pattern.size()!=words.size())
            return false;
        
        // 处理pattern
        for(int i=0;i<pattern.size();i++){
            
            // pattern[i]还从未出现过,则记录pattern[i]第一次出现的位置
            if(first[pattern[i]-'a']==-1){
                position.push_back(i);
                
                if(diff[words[i]]==false)
                    diff[words[i]]=true;
                
                // pattern[i]还没有出现过，words[i]却已经重复
                else
                    return false;
                
                first[pattern[i]-'a']=i;
            }
            else
                position.push_back(first[pattern[i]-'a']);
        }
        
        for(int i=0;i<pattern.size();i++){
            if(words[i]!=words[position[i]])
                return false;
        }
        
        return true;
        
        
    }
};
