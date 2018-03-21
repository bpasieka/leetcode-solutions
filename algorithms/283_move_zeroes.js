/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    const length = nums.length;
    if (length <= 1) {
        return;
    }

    let numberOfZeroes = 0;
    let lastNonZeroIndex = 0;
    for (let i = 0; i < length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        } else {
            numberOfZeroes++;
        }
    }

    while (numberOfZeroes > 0) {
        nums[length - numberOfZeroes] = 0;
        numberOfZeroes--;
    }
};