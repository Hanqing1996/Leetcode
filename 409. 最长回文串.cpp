class Solution {
public:
    
    /*用Hash,得到所有字符出现次数，统计所有偶数次数和+所有(奇数次数-1)和,再加1(若有奇数次)  即为答案*/
    int longestPalindrome(string s) {
        
        int Hash[123]={0};
        bool odd=false; 
            
        for(int i=0;i<s.size();i++){
            Hash[s[i]]++;
        }
        
        int len=0,maxOdd=0;
        for(int i=0;i<123;i++){
            if(Hash[i]>0){
                if(Hash[i]%2==0)
                    len+=Hash[i];
                else{
                    odd=true;
                    len+=(Hash[i]-1);
                }
            }
        }
        
        if(odd)
            len+=1;
        return len;
    }
};
