/**
 * @param {string} s
 * @return {number}
 */


// 直接用强大的 parseInt,参考自 https://leetcode-cn.com/problems/string-to-integer-atoi/solution/javascripttou-ji-qu-qiao-wu-xu-si-kao-yi-kan-jiu-h/
var myAtoi = function(s) {
    let num=parseInt(s,10)
    if(isNaN(num))
        return 0
    else if(num<Math.pow(-2,31)||num>Math.pow(2,31)-1){
        return num<Math.pow(-2,31)?Math.pow(-2,31):Math.pow(2,31)-1
    }else
        return num    
};
