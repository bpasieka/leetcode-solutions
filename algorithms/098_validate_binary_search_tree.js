/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
    return isValidBSTIter(root, null, null);
};

/**
 * @param {TreeNode} root
 * @param {number} min
 * @param {number} max
 * @return {boolean}
 */
const isValidBSTIter = (root, min, max) => {
    if (root === null) {
        return true;
    }

    if (min !== null && root.val <= min) {
        return false;
    }

    if (max !== null && root.val >= max) {
        return false;
    }

    return isValidBSTIter(root.left, min, root.val) && isValidBSTIter(root.right, root.val, max);
};