/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const result = [];

    generateParenthesisIter(n, n, "", result);

    return result;
};

/**
 * @param {number} opened
 * @param {number} closed
 * @param {string} currentString
 * @param {string[]} result
 * @return {string[]}
 */
const generateParenthesisIter = (opened, closed, currentString, result) => {
    if (opened === 0 && closed === 0) {
        result.push(currentString);
        return;
    }

    if (opened === closed) {
        generateParenthesisIter(opened - 1, closed, `${currentString}(`, result);
    } else if (opened === 0) {
        generateParenthesisIter(opened, closed - 1, `${currentString})`, result);
    } else {
        generateParenthesisIter(opened - 1, closed, `${currentString}(`, result);
        generateParenthesisIter(opened, closed - 1, `${currentString})`, result);
    }
};