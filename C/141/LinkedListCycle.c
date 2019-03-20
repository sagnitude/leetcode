#include <stddef.h>
#include <stdio.h>
typedef int bool;
#define true 1
#define false 0


struct ListNode {
    int val;
    struct ListNode *next;
};
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
bool hasCycle(struct ListNode *head) {
    if (!head) {
        return 0;
    }

    struct ListNode* it = head;
    struct ListNode* fs = head;

    while (!fs && !(fs->next)) {
        if (it == fs) {
            return 1;
        }

        it = it->next;
        fs = fs->next->next;
    }
    return 0;
}

int main() {
    struct ListNode * l;
    l->val = 1;
    l->next = l;
    printf("%d", hasCycle(l));
    return 0;
}