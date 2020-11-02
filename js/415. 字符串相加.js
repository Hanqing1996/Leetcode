/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i=num1.length-1
    let j=num2.length-1
    let carry=0
    let ans=[]

    while(i>=0||j>=0||carry!=0){
        i>=0&&(carry+=(num1[i--]-'0'))
        j>=0&&(carry+=(num2[j--]-'0'))
        ans.push(carry%10)
        carry=Math.floor(carry/10)
    }
    return ans.reverse().join("") 
};
