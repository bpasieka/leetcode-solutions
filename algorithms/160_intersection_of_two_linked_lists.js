/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    if (headA === null || headB === null) {
        return null;
    }

    let nodeAlength = 1;
    let nodeA = headA;
    while (nodeA.next) {
        if (nodeA.next) {
            nodeA = nodeA.next;
            nodeAlength++;
        }
    }

    let nodeBlength = 1;
    let nodeB = headB;
    while (nodeB.next) {
        if (nodeB.next) {
            nodeB = nodeB.next;
            nodeBlength++;
        }
    }

    if (nodeA !== nodeB) {
        return null;
    }

    nodeA = headA;
    nodeB = headB;
    while (nodeAlength > 0 && nodeBlength > 0) {
        if (nodeAlength === nodeBlength) {
            if (nodeA === nodeB) {
                return nodeA;
            } else {
                nodeA = nodeA.next;
                nodeB = nodeB.next;
                nodeAlength--;
                nodeBlength--;
            }
        } else if (nodeAlength > nodeBlength) {
            nodeA = nodeA.next;
            nodeAlength--
        } else {
            nodeB = nodeB.next;
            nodeBlength--
        }
    }

    return null;
};