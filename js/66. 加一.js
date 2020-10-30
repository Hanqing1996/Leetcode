/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const {length:len}=digits
    let add=0

    add=digits[len-1]===9?1:0
    digits[len-1]=(digits[len-1]+1)%10

    for(let i=len-2;i>=0;i--){
        pre=digits[i]
        digits[i]=(digits[i]+add)%10
        add=pre===9&&add===1?1:0
    }
    if(add===1)
        digits.unshift(1)
    return digits
};
