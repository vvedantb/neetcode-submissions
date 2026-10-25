class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let uniqueNums = new Set();
        for (var i=0; i < nums.length-1; i++){
            if (uniqueNums.has(nums[i])){
                return true;
            }
            else {
                uniqueNums.add(nums)
            }
        }
        return false;

    }
}
