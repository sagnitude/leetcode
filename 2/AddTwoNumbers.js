/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * #2 Add Two Numbers
 * use recursive for better speed?
 * note that do-while is different with while, mind margins in do-while
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var val = new ListNode();
    var overflow  = 0;
    var handler = val;
    do{
        var v1 = l1 && l1.val ? l1.val : 0;
        var v2 = l2 && l2.val ? l2.val : 0;
        var r = v1 + v2 + overflow;
        overflow = ~~(r / 10);
        handler.val = r % 10;
        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
        if (l1 || l2) {
            handler.next = new ListNode();
            handler = handler.next;
        }
    } while (l1 !== null || l2 !== null);
    if (overflow) {
        handler.next = new ListNode();
        handler.next.val = overflow;
        handler.next.next = null;
    }
    return val;
};
