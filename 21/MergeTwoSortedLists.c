struct ListNode{
    int val;
    struct ListNode* next;
};

#define Null 0

/**
 * Note: specify Null if not specified.
 * Note: Null is not always 0 in IA64
 * Note: '->' is used for a struct pointer to get element inside.
 * Note: new a struct should use (Ptr*)malloc(sizeof(Ptr))
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
    if (l1 == Null) {
        return l2;
    } else if (l2 == Null) {
        return l1;
    }
    struct ListNode *r = (struct ListNode*)malloc(sizeof(struct ListNode));
    struct ListNode *p = r;
    while (l1 != Null || l2 != Null) {
        if (l1 != Null && l2 != Null) {
            if (l1->val < l2->val) {
                p->next = l1;
                l1 = l1->next;
            } else {
                p->next = l2;
                l2 = l2->next;
            }
        } else if (l2 != Null) {
            p->next = l2;
            l2 = l2->next;
        } else {
            p->next = l1;
            l1 = l1->next;
        }
        p = p->next;
    }
    return r->next;
}

int main() {
    struct ListNode* l1 = (struct ListNode*)malloc(sizeof(struct ListNode));
    struct ListNode* l2 = (struct ListNode*)malloc(sizeof(struct ListNode));
    mergeTwoLists(l1, l2);
}