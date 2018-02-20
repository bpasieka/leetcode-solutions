/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    return isHappyIter(n, []);
};

/**
 * @param {number} n
 * @param {array} cache
 * @return {boolean}
 */
const isHappyIter = (n, cache) => {
    if (cache.includes(n)) {
        return false;
    }
    cache.push(n);

    const nAsString = n.toString();

    let squareSum = 0;
    for (let i = 0; i < nAsString.length; i++) {
        const value = parseInt(nAsString[i]);
        squareSum += value * value;
    }

    if (squareSum === 1) {
        return true;
    }

    return isHappyIter(squareSum, cache);
};