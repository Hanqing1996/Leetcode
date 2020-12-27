/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry=0
    let i=num1.length-1
    let j=num2.length-1
    let res=[]
    while(i>=0||j>=0||carry!=0){
        let sum=0
        i>=0&&(sum+=Number(num1[i--]))
        j>=0&&(sum+=Number(num2[j--]))
        res.unshift((sum+carry)%10)
        carry=Math.floor((sum+carry)/10)
    }
    return res.join('')
};
