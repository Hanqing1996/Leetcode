class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) {
        map<string,int> Hash;
        vector<string> res;
        int len=s.length();
        if(len<11) return res;
        int left=0,right=9;
        while(right<len){
            string current=s.substr(left,10);
            if(Hash[current]==1){
                res.push_back(current);
            } 
            Hash[current]++;
            left++;
            right++;
        }
        return res;
    }
};
