/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    if (nums.length <= 1) {
        return [nums];
    }

    const result = [];
    permuteIter([], nums, result);

    return result;
};

/**
 * @param {number[]} prefix
 * @param {number[]} nums
 * @param {number[][]} result
 */
const permuteIter = (prefix, nums, result) => {
    if (nums.length === 0) {
        result.push(prefix);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        permuteIter(
            [...prefix, nums[i]],
            [...nums.slice(0, i), ...nums.slice(i + 1)],
            result
        );
    }
};