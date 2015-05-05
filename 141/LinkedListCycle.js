/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === {}) {
        return false;
    }

    var iterator = head;
    var faster = head;

    while (faster && faster.next) {
        iterator = iterator.next;
        faster = faster.next.next;

        if (!faster) {
            return false;
        }

        if (iterator === faster) {
            return true;
        }
    }

    return false;
};