/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const countsMap = {};
    const counts = [];

    for (let i = 0; i < nums.length; i++) {
        countsMap[nums[i]] = (countsMap[nums[i]] || 0) + 1;
    }

    for (let key in countsMap) {
        counts.push([parseInt(key), countsMap[key]]);
    }

    counts.sort((a, b) => {
        return a[1] < b[1] ? 1 : -1;
    });


    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(counts[i][0]);
    }

    return result;
};