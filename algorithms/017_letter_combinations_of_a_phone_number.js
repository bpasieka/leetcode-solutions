const digitsMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    if (digits === '') {
        return [];
    }

    return letterCombinationsIter(digits, '', [])
};

/**
 * @param {string} digits
 * @param {string} prefix
 * @param {string[]} combinations
 * @return {string[]}
 */
const letterCombinationsIter = (digits, prefix, combinations) => {
    if (digits === '') {
        return [prefix, ...combinations];
    }

    const firstsLetter = digits.charAt(0);
    const digitMap = digitsMap[firstsLetter];

    if (digitMap === undefined) {
        combinations = letterCombinationsIter(digits.slice(1), prefix, combinations);
    } else {
        const mapLength = digitMap.length;
        for (let i = 0; i < mapLength; i ++) {
            combinations = letterCombinationsIter(digits.slice(1), prefix + digitMap[i], combinations);
        }
    }

    return combinations;
};