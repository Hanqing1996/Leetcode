class Solution {
public:
    map<int,string> alphas;
    vector<string> res;
    vector<int> nums;
    int len;
    vector<string> letterCombinations(string digits) {
        alphas = {
            {2,"abc"}, {3,"def"}, {4,"ghi"},
            {5,"jkl"}, {6,"mno"}, {7,"pqrs"},
            {8,"tuv"}, {9,"wxyz"}
        }; 
        if(digits=="")
            return res;
        
        len=digits.length();
        for(int i=0;i<len;i++){
            nums.push_back(digits[i]-'0');
        }
        DFS(0,"");
        return res;
    }
    void DFS(int index,string temp){
        if(index==len){
            res.push_back(temp);
            return;
        }
        for(int i=0;i<alphas[nums[index]].length();i++){
            DFS(index+1,temp+alphas[nums[index]][i]);
        }
    }
};
