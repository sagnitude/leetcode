# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # @param {ListNode} l1
    # @param {ListNode} l2
    # @return {ListNode}
    def addTwoNumbers(self, l1, l2):
        overflow = 0
        val = ListNode(None)
        handler = val
        while l1 is not None or l2 is not None:
            if l1 is None or l1.val is None:
                v1 = 0
            else:
                v1 = l1.val
            if l2 is None or l2.val is None:
                v2 = 0
            else:
                v2 = l2.val
            r = v1 + v2 + overflow
            overflow = r / 10
            handler.val = r % 10
            if l1 is not None:
                l1 = l1.next
            if l2 is not None:
                l2 = l2.next
            if l1 is not None or l2 is not None:
                handler.next = ListNode(None)
                handler = handler.next
        if overflow != 0:
            handler.next = ListNode(overflow)
            handler.next.next = None
        return val

s = Solution()
n1 = ListNode(0)
n2 = ListNode(0)
s.addTwoNumbers(n1, n2)