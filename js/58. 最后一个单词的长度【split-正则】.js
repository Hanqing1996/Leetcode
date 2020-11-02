/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // 这道题的恶心之处在于s前后可能存在空格，所以需要在分割后再做非""过滤
    let words=s.split(/  */).filter(Boolean)
    if(words.length===0) 
        return 0
    return words.pop().length
};
