// 构造双倍字符串，然后去掉其首尾元素，判断剩余字符串是否包含s
var repeatedSubstringPattern = function(s) {
    let str=s+s
    str=str.slice(1,-1)
    return str.indexOf(s)>-1
};


// 正则
var repeatedSubstringPattern = function(s) {
    return /^([a-z]+)\1+$/.test(s)
};
