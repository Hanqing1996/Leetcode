/*
 * 一元二次方程
 */
class Solution {
public:
    int arrangeCoins(int n) {
        return floor((sqrt(1+8*n)-1)/2);
    }
};
