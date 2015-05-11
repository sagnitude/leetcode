
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
    p = r->next;
    free(r);
    return p;
}

/**
 * pointer offset is done by plus a integer
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {
    if (listsSize == 0) {
        return Null;
    } else if (listsSize == 1) {
        return lists[0];
    } else if (listsSize == 2) {
        return mergeTwoLists(lists[0], lists[1]);
    } else {
        int half = listsSize / 2;
        return mergeTwoLists(mergeKLists(lists, half), mergeKLists(lists + half, listsSize - half));
    }
}

int main() {
    struct ListNode** ls;
    ls[0] = (struct ListNode*)malloc(sizeof(struct ListNode));
    ls[1] = (struct ListNode*)malloc(sizeof(struct ListNode));
    mergeKLists(ls, 2);
}