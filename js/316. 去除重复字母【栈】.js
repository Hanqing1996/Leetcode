/**
 * @param {string} s
 * @return {string}
 */



/**
 * 原则：尽量让符合要求的返回结果字符是升序的，这样才能保证字典序最小
 * 
 * 如果当前字符大于栈顶字符，则将当前字符入栈
 * 如果当前字符小于栈顶字符，则查询栈顶元素会不会再次出现，会则持续出栈。然后让当前字符入栈，不会则直接让当前字符入栈
 * 
 * 每次都要判断当前字符是否已存在于栈中，若已有则跳过
 */


var removeDuplicateLetters = function(s) {
    let stack=[]

    for(let i=0;i<s.length;i++){
        // 当前元素已在栈中
        if(stack.indexOf(s[i])>=0)
            continue
            
        if(stack.length===0){
            stack.push(s[i])
            continue
        }
        let top=getTop(stack)    
        if(s[i]>top){
            stack.push(s[i])
            continue
        }
        while(s[i]<top&&s.indexOf(top,i)>i&&stack.length!=0){
            stack.pop()
            top=getTop(stack) 
        }
        stack.push(s[i])
    }
    return stack.join('')
};
let getTop=function(stack){
    let {length}=stack
    return stack[length-1]
}
