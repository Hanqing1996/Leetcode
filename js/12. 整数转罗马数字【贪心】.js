/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    let table={}
    table[0]=""
    table[1]="I"
    table[5]="V"
    table[10]="X"
    table[50]="L"
    table[100]="C"
    table[500]="D"
    table[1000]="M"
    
    table[4]="IV"
    table[9]="IX"
    table[40]="XL"
    table[90]="XC"
    table[400]="CD"
    table[900]="CM"
    
    // 将 num 按照千,百，十划分
    let parts=splitNum(num)
    let ans=[]

    // 千位处理
    for(let i=0;i<parts[0]/1000;i++){
        ans.push(table[1000])
    }

    // i-n:1-2,2-1,3-0 
    for(let i=1;i<parts.length;i++){

        let div=Math.pow(10,3-i)

        if(table[parts[i]]){
            ans.push(table[parts[i]])
            continue
        }else{

            // 处理 2 3 6 7 8
            if(Math.floor(parts[i]/(5*div))===1){
                ans.push(table[5*div])
            }
            parts[i]=parts[i]%(5*div)/div
            for(let j=0;j<parts[i];j++){
                ans.push(table[div])
            }
        }
        
    }
    return ans.join("")
};

let splitNum=function(num){

    // 由题意，输入在 1 到 3999 的范围内。所以 nums 为 1 到 4 位
    let a=Math.floor(num/1000)*1000 // 1000
    num=num%1000 // 994
    let b=Math.floor(num/100)*100 // 900
    num=num%100 // 94
    let c=Math.floor(num/10)*10 // 90
    num=num%10 // 4

    return [a,b,c,num] 
}
