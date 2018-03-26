/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const cache = new Map();

    for (const word of strs) {
        const hash = getHash(word);
        if (!cache.has(hash)) {
            cache.set(hash, [])
        }
        cache.get(hash).push(word);
    }

    const result = [];
    cache.forEach((value) => {
        result.push(value);
    });

    return result;
};

/**
 * @param {string} word
 * @return {string}
 */
const getHash = (word) => {
    return word.split('').sort().join('');
};