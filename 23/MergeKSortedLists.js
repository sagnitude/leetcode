/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Note: merge one by one requires n-1 merges. but two points requires at most 3/4 of n-1 merges
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return [];
    } else if (lists.length === 1) {
        return lists[0];
    } else if (lists.length === 2) {
        return mergeTwoLists(lists[0], lists[1]);
    } else {
        return mergeTwoLists(mergeKLists(lists.slice(0, ~~(lists.length / 2))), mergeKLists(lists.slice(~~(lists.length / 2), lists.length)));
    }
};

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