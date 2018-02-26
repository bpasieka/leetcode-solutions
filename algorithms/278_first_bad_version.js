/**
 * Definition for isBadVersion()
 *
 * @param {number} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
    /**
     * @param {number} start
     * @param {number} end
     * @return {number} The first bad version
     */
    const firstBadVersion = (start, end) => {
        if (end - start === 1) {
            return end;
        }

        const even = (start + end) % 2 === 0;
        const middle = even ? (start + end) / 2 : (start + end + 1) / 2;

        if (isBadVersion(middle)) {
            return firstBadVersion(start, middle);
        } else {
            return firstBadVersion(middle, end);
        }
    };

    /**
     * @param {number} n Total versions
     * @return {number} The first bad version
     */
    return function(n) {
        return firstBadVersion(0, n);
    };
};