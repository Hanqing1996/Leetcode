class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        int m = matrix.length, n = matrix[0].length;
        int lo = matrix[0][0], hi = matrix[m - 1][n - 1];
        while (lo <= hi) {
            
            // mid为预测的第k小元素，当k=cnt时，说明预测对了
            int mid = lo + (hi - lo) / 2;
            int cnt = 0;
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n && matrix[i][j] <= mid; j++) {
                    cnt++;
                }
            }
            if (cnt < k) lo = mid + 1;
            
            // 包含了cnt=k的情况，又因为k保证有效，所以实际是mid=第k小元素的情况
            else hi = mid - 1;
        }
        return lo;
    }
}
