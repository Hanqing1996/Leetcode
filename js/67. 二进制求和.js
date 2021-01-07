/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i=a.length-1
    let j=b.length-1
    let carry=0
    let res=[]

    while(i>=0||j>=0||carry!=0){
        let sum=0
        i>=0&&(sum+=Number(a[i--]))
        j>=0&&(sum+=Number(b[j--]))

        res.unshift((sum+carry)%2)
        carry=Math.floor((sum+carry)/2)
    }

    let ans=res.join('').replace(/^0+/,'')
    return ans?ans:'0'
};
