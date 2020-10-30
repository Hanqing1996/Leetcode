/**
 * @param {string} path
 * @return {string}
 */

// 参考：https://leetcode-cn.com/problems/simplify-path/solution/71-simplify-path-ti-jie-javascript-by-raymond-yan/
var simplifyPath = function(path) {
    let paths=path.split('/')
    let stack=[]
    for(let i=0;i<paths.length;i++){
        let item=paths[i]
        if(item===''||item==='.')
            continue
        else if(item=='..')
            stack.pop()    
        else
            stack.push(item)    
    }
    return '/' + stack.join('/');
};
