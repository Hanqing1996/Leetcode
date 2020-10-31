/**
 * @param {string} seq
 * @return {number[]}
 */

/**
 * 参考自 https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solution/you-xiao-gua-hao-de-qian-tao-shen-du-by-leetcode-s/321702
 * 时刻平衡A,B的嵌套深度。
 * 若目前A的嵌套深度大于B,则遇到'('应该分配给B以避免A深度过大;遇到')'应该分配给A以避免A深度过大
 */

var maxDepthAfterSplit = function(seq) {
    let res=[]
    let deep=[0,0]
    for(let i=0;i<seq.length;i++){
        // 深度增长
        if(seq[i]==='('){
            if(deep[0]<deep[1]){
                res.push(0)
                deep[0]++
            }else{
                res.push(1)
                deep[1]++
            }
        }
        // 深度降低
        else{
            if(deep[0]<deep[1]){
                res.push(1)
                deep[1]--
            }else{
                res.push(0)
                deep[0]--
            }
        }
    }
    return res
};
