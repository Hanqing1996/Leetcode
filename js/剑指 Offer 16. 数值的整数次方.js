/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 
 // 模拟，超时（面试可以写）,注意n为负数时先转为正数，最后求倒数
var myPow = function(x, n) {
    if(n===0)
        return 1
    let isNegative=false
    if(n<0){
        isNegative=true
        n=-n
    }
        
    let base=x
    while(n>1){
        x*=base
        n--
    }
    return isNegative?1/x:x
};

// 二分，参考自 https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/solution/tu-jie-tu-xie-zheng-li-3chong-jie-fa-bif-er-fen-fa/
var myPow = function(x, n) {

    let isBaseNegative=false

    let isExpNegative=false
    if(n<0){
        n=-n
        isExpNegative=true
    }

    const caculate=function(base,exp){
        if(exp===0)
            return 1
        if(exp===1)
            return base
        
        let partResult=caculate(base,Math.floor(exp/2))
        let extra=(exp%2===1?base:1)
        // 如果是 caculate(base,Math.floor(exp/2))*caculate(base,Math.floor(exp/2))...就不能达到 O(logN) 的时间复杂度 
        return partResult*partResult*extra
    }
    
    let res=caculate(x,n)
    if(isExpNegative)
        res=1/res

    return res
};
