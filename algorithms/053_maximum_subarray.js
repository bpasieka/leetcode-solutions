/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    if (nums.length === 0) {
        return 0;
    }

    let max = Number.MIN_SAFE_INTEGER;
    let maxCurrent = 0;

    for (let i = 0; i < nums.length; i++) {
        maxCurrent = maxCurrent + nums[i];

        if (max < maxCurrent) {
            max = maxCurrent;
        }

        if (maxCurrent < 0) {
            maxCurrent = 0;
        }
    }

    return max;
};