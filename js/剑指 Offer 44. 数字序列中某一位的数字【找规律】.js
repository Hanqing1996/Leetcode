var findNthDigit = function(n) {
    /**
     * 1 位数字有 9 个：1-9
     * 2 位数字有 90 个：10-99
     * 3 位数字有 900 个：100-999
     * k 位数字有 9 * 10^k 个
     */
    let base=0,count=0
    // 先找到 n 处于哪个阶段
    while(base<n){
        count++
        pre=base
        base+=count*9*Math.pow(10,count-1)
    } 
    let num=Math.floor((n-pre)/count)
    let remain=(n-pre)%count
    // leftNum 就是 n 左边最近的数字
    let leftNum=Math.pow(10,count-1)+num-1

    if(remain===0)
        return parseInt(leftNum.toString()[count-1])
    return parseInt((leftNum+1).toString()[remain-1])  
};
