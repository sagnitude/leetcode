/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Note: mind the margins
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }
    var des = false;
    if (l1.next) {
        des = l1.val > l1.next.val;
    } else if (l2.next) {
        des = l2.val > l2.next.val;
    }
    var r = new ListNode();
    var p = r;
    while (l1 || l2) {
        if (l1 && l2) {
            if ((l1.val > l2.val && des) || (l1.val < l2.val && !des)) {
                p.next = l1;
                l1 = l1.next;
            } else {
                p.next = l2;
                l2 = l2.next;
            }
        } else if (l2) {
            p.next = l2;
            l2 = l2.next;
        } else {
            p.next = l1;
            l1 = l1.next;
        }
        p = p.next;
    }
    return r.next;
};