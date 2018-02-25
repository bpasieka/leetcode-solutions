/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    let cache = {};

    for (let i = 0; i < s.length; i++) {
        cache[s[i]] = (cache[s[i]] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (cache[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};