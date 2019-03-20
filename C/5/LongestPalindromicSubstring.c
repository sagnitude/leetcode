#include <stdio.h>
#include <string.h>

char* longestPalindrome(char* s) {
    int count = 0;
    char* p = s;
    while (*p++) count++;
    if (count < 2) {
        return s;
    }
    int min_start = 0, max_len = 1;
    for (int i = 0; i < count;) {
        if (count - i <= max_len / 2) break;
        int j = i, k = i;
        while (k < count - 1 && s[k+1] == s[k]) ++k;
        i = k+1;
        while (k < count - 1 && j > 0 && s[k+1] == s[j-1]) { ++k; --j; }
        int n_len = k - j + 1;
        if (n_len > max_len) { min_start = j; max_len = n_len; }
    }
    char *n;
    memcpy(n, s+min_start, max_len);
    n[max_len] = '\0';
    return n;
}

int main() {
    char* s = "bb";
    char* r = longestPalindrome(s);
    printf("%s\n", r);
}