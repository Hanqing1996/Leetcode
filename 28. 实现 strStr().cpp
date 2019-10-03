class Solution {
public:
    int strStr(string haystack, string needle) {
        if(haystack.size()<needle.size())
            return -1;
        if(needle=="")
            return 0;
        for(int i=0;i<haystack.size();i++){
            if(i<=haystack.size()-needle.size()){
                string current=haystack.substr(i,needle.size());
                if(current==needle)
                    return i;
            } 
        }
        return -1;   
    }
};
