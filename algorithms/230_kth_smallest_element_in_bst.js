/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
    const counter = {n: 0};
    const node = kthSmallestIter(root, k, counter);

    return node.val;
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @param {object} counter
 * @return {number}
 */
const kthSmallestIter = (root, k, counter) => {
    if (root.left) {
        const node = kthSmallestIter(root.left, k, counter);
        if (node) {
            return node;
        }
    }

    counter.n++;
    if (counter.n === k) {
        return root;
    }

    if (root.right) {
        const node = kthSmallestIter(root.right, k, counter);
        if (node) {
            return node;
        }
    }

    return null;
};