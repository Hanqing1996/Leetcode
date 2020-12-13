/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let len1=num1.length
    let len2=num2.length
    let index1,index2
    
    let ans=[]

    for(let i=len1-1;i>=0;i--){
        for(let j=len2-1;j>=0;j--){
            index1=i+j
            index2=i+j+1
            let mul=num1[i]*num2[j]
            ans[index1]=Math.floor(mul/10)+(ans[index1]|0)
            ans[index2]=(mul+(ans[index2]|0)) %10
        }
    }
    let result= ans.join('').replace(/^0+/,'')

    // 处理 0*0
    return !result ? '0' : result
};
