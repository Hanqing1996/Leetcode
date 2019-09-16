class Solution {
    
    /**
     * 注意这道题要求连续
     * 令dp[i][j]表示以A[i]结尾的A子串与以B[j]结尾的B子串的最长公共子序列长度
     */
      public int findLength(int[] A, int[] B) {
            if(A==null||B==null||A.length==0||B.length==0){
                return 0;
            }
            int[][] temp=new int[A.length][B.length];
            int res=Integer.MIN_VALUE;
            for(int i=0,l1=A.length;i<l1;i++){
                for(int j=0,l2=B.length;j<l2;j++){
                    if(A[i]==B[j]){
                        if(i==0||j==0){
                            temp[i][j]=1;
                        }
                        else{
                            temp[i][j]=temp[i-1][j-1]+1;
                        }
                    }
                    res=Math.max(temp[i][j],res);
                }
            }
            return res;
        }
}
