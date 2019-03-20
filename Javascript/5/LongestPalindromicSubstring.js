/**
 * Note: js 123/2 = 61.5, python: 123/2 = 61
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s;
    }
    var min = 0, max_len = 1;
    for (var i = 0; i < s.length;) {
        if (s.length - i <= ~~(max_len / 2))
            break;
        var j = i, k = i;
        while (k < s.length - 1 && s[k+1] === s[k]) ++k;
        i = k + 1;
        while (k < s.length - 1 && j > 0 && s[k+1] === s[j-1]) {
            ++k;
            --j;
        }
        var n_len = k - j + 1;
        if (n_len > max_len) {
            min = j;
            max_len = n_len;
        }
    }
    return s.slice(min, min + max_len);
};


/*
    An interesting idea, build a bi-directional linked list,
    each contains an array of a half of a palindrome.

    for example:

    [a  bb  dd  gg  h]
        cc  ee
        dd  ff
        a

    here,  [bb cc dd a] is an element, we try to "pull" a palindrome out from an array
    while we can't do it anymore, just stop.
    the longest element is the longest palindrome string.

    var ele = function(val, even, stop) {
        this.val = val;
        this.even = even;
        this.stop = stop;
        this.pop = function() {
            return this.val.shift();
        };
        this.push = function(val) {
            this.val.unshift(val);
        };
        this.equals = function(other) {
            return this.val.toString() === other.val.toString();
        };
        this.grow = function() {
            if (this.prev && this.next) {
                if (this.prev.val[0] === this.next.val[0]) {
                    this.val.shift(this.prev.val[0]);
                    this.prev.popup(1);
                    this.next.popup(0);
                }
            }
        };
        this.popup = function(src) {
            if (src === 1) {
                //from +1
                this.prev.receive(this.val.shift(), 1);
            } else if (src === 0) {
                //from -1
                this.next.receive(this.val.shift(), 0);
            }
        };
        this.receive = function(val, src) {
            if (src === 1) {
                //from +1
                if (this.prev && this.prev.val[0] === val) {
                    this.val.shift(val);
                }
            } else if (src === 0) {
                //from -1
            }
        }
    };
    var longest = "";
    var chs = new ele([s[0]], 0, 0);
    var handler = chs;
    s.slice(1).split("").forEach(function(char, index) {
        var nele = new ele([char], 0, 0);
        nele.prev = handler;
        handler.next = nele;
        handler = handler.next;
    });
    while (true) {
        //out?
        for (var ch in charArray) {
            if (charArray[ch].)
        }
        //scanner start scanning
        //
    }
    return longest;
 */