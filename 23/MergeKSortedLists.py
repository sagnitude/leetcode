# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# Note that list[0:end] is slicing
class Solution:
    # @param {ListNode} l1
    # @param {ListNode} l2
    # @return {ListNode}
    def mergeTwoLists(self, l1, l2):
        if l1 is None:
            return l2
        if l2 is None:
            return l1
        r = ListNode(1)
        p = r
        while l1 is not None or l2 is not None:
            if l1 is not None and l2 is not None:
                if l1.val < l2.val:
                    p.next = l1
                    l1 = l1.next
                else:
                    p.next = l2
                    l2 = l2.next
            elif l2 is not None:
                p.next = l2
                l2 = l2.next
            else:
                p.next = l1
                l1 = l1.next
            p = p.next
        return r.next

    # @param {ListNode[]} lists
    # @return {ListNode}
    def mergeKLists(self, lists):
        if len(lists) is 0:
            return []
        elif len(lists) is 1:
            return lists[0]
        elif len(lists) is 2:
            return self.mergeTwoLists(lists[0], lists[1])
        else:
            half = len(lists) / 2
            return self.mergeTwoLists(self.mergeKLists(lists[0:half]), self.mergeKLists(lists[half:len(lists)]))
