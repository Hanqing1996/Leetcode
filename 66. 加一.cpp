class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        
        reverse(digits.begin(), digits.end());
        
        int count=0;
        bool plus=false;
        if(digits[0]==9){
            digits[0]=0;
            plus=true;
        } else{
            digits[0]++;
        }
        
        for(int i=1;i<digits.size();i++){
            
            // 判断是否产生进位
            if(digits[i]==9&&plus)
                digits[i]=0;
            else if(plus){
                digits[i]++;
                plus=false; // 停止进位   
            }
        }
        
        // 处理最高位
        if(plus)
            digits.push_back(1);
        
        reverse(digits.begin(), digits.end());
        return digits;
    }
};
