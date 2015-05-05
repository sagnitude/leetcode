# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # @param head, a ListNode
    # @return a boolean
    def hasCycle(self, head):
        iterator = head
        faster = head
        while faster is not None and faster.next is not None:
            iterator = iterator.next
            faster = faster.next.next

            if iterator is faster:
                return True
        return False