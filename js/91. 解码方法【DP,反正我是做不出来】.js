/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {


    // dp[i]：以 s[i] 结尾的前缀子串有多少种解码方法。

    // 参考题解：https://leetcode-cn.com/problems/decode-ways/solution/dong-tai-gui-hua-java-python-by-liweiwei1419/

    if(s[0]==='0') return 0

    let {length:n}=s
    let dp=Array(n+1).fill(0)

    dp[0]=1

    for(let i=1;i<n;i++){

        if (s[i] != '0') {
            dp[i] = dp[i - 1];
        }

        let temp=Number(s.substr(i-1,2))
        if(temp>=10&&temp<=26){
            if(i==1){
                dp[i]++
            }else{
                dp[i]+=dp[i-2]
            }
        }
    }
    return dp[n-1]

};
