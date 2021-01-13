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
