// 垃圾递归-提交超时-无法利用过去的状态

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    let count=0
    const jump=function(step){

        if(mapping.get(step)){
            count+=mapping.get(step)
            return
        }

        if(step>=n){
            if(step===n){
                count= count+1
            }
            return
        }
        jump(step+1)
        jump(step+2)
    }       
    jump(0)                                                                                                                  
    return count               
};





/**
 * @param {number} n
 * @return {number}
 */


/**
 * 设跳上 n 级台阶有 f(n) 种跳法。在所有跳法中，青蛙的最后一步只有两种情况： 跳上 1 级或 2 级台阶。
 * 当为 1 级台阶： 剩 n−1 个台阶，此情况共有 f(n−1) 种跳法；
 * 当为 2 级台阶： 剩 n−2 个台阶，此情况共有 f(n−2) 种跳法。
 * f(n) 为以上两种情况之和，即 f(n)=f(n−1)+f(n−2) 
 * 
 * 由于递归（自顶向下，由 n 至 1）必超时，所以我们不用递归，从1开始构建 sum[i]
 */
var numWays = function(n) {
    let sum={}
    sum[0]=1
    sum[1]=1
    for(let i=2;i<=n;i++){
        sum[i]=(sum[i-1]+sum[i-2])%1000000007
    }
    return sum[n]
};
