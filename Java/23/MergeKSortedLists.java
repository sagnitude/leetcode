/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) {
            return null;
        } else if (lists.length == 1) {
            return lists[0];
        } else if (lists.length == 2) {
            return mergeTwoLists(lists[0], lists[1]);
        } else {
            int half = lists.length / 2;
            ListNode[] l1 = new ListNode[half];
            ListNode[] l2 = new ListNode[lists.length - half];
            for (int i = 0; i < lists.length; i++) {
                if (i < half) {
                    l1[i] = lists[i];
                } else {
                    l2[i-half] = lists[i];
                }
            }
            return mergeTwoLists(mergeKLists(l1), mergeKLists(l2));
        }
    }

    private ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) {
            return l2;
        } else if (l2 == null) {
            return l1;
        }
        ListNode r = new ListNode(1);
        ListNode p = r;
        while (l1 != null || l2 != null) {
            if (l1 != null && l2 != null) {
                if (l1.val < l2.val) {
                    p.next = l1;
                    l1 = l1.next;
                } else {
                    p.next = l2;
                    l2 = l2.next;
                }
            } else if (l2 != null) {
                p.next = l2;
                l2 = l2.next;
            } else {
                p.next = l1;
                l1 = l1.next;
            }
            p = p.next;
        }
        return r.next;
    }
}