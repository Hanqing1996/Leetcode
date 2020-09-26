/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    // 单调栈
    // 关键：
    // 1. res[index] = i - index; 表示离第 index 天最近的 bigger 数在过了 i-index 天后才出现 
    // 2. 注意 76 出现后，res[2]和 res[5] 都被确定了下来

    let {length:n}=T
    let res=Array(n).fill(0)
    if(n<2)
        return res

    // 构建栈
    let stack=[]    
    for(let i=0;i<n;i++){
        // 比较历史元素，看是否有机会出栈（出栈就意味着找到了离该栈内元素最近的 bigger）
        while(stack.length>0&&T[stack[stack.length-1]]<T[i]){
            let index=stack.pop()
            res[index]=i-index
        }
        stack.push(i)
    }

    // 栈内剩余元素，右边再也找不到 bigger 了
    while(stack.length>0){
        res[stack.pop()]=0
    }
    return res
};
