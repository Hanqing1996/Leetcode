/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

// 
/**
 * 考研数据结构练习题 
 * 模拟一个栈，遍历 pushed，逐个入栈，如果发现栈顶元素于 poped[0] 一致则持续出栈。
 * 最后观察 stack 和 poped 是否都被清空即可
 */
var validateStackSequences = function(pushed, popped) {

    let {length:pushLen}=pushed
    let stack=[]
    for(let i=0;i<pushLen;i++){
        stack.push(pushed[i])
        if(pushed[i]!=popped[0])
            continue
        let top=stack[stack.length-1]    
        while(top===popped[0]&&popped.length>0){
            popped.shift()
            stack.pop()
            top=stack[stack.length-1]
        }
    }
    return stack.length===0&&popped.length===0  
};
