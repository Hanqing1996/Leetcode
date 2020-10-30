/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {


    // s 长度为奇数，返回 false
    if(s.length%2===1)
        return false

    let stack=[]
    for(let i=0;i<s.length;i++){
        item=s[i]
        if(leftValid(item)){
            stack.push(item)
        }else{
            if(pair(stack[stack.length-1],item)){
                stack.pop()
            }else{
                return false
            }
        }
    }
    if(stack.length>0)
        return false
    else    
        return true
};


let leftValid=function(sym){
    return sym==='('||sym==='{'||sym==='['
}

let pair=function(left,right){
    return (left==='('&&right===')')||(left==='{'&&right==='}')||(left==='['&&right===']')
}
