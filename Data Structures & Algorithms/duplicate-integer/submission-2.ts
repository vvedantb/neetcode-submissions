class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let uniqueNums = new Set();
        for (var i=0; i < nums.length; i++){
            var num = nums[i]
            if (uniqueNums.has(num)){
                return true;
            }
            else {
                uniqueNums.add(num)
            }
        }
        return false;

    }
}
