/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2);
    nums1.sort(function(x, y) {
        if (x>y) {
            return -1;
        } else if (x<y) {
            return 1;
        }
    });
    var half = ~~((nums1.length) / 2);
    var even = (nums1.length) % 2 === 0;
    if (!even) {
        return nums1[half];
    } else {
        return (nums1[half - 1] + nums1[half]) / 2;
    }
//    var half = ~~((nums1.length + nums2.length) / 2);
//    var even = (nums1.length + nums2.length) % 2 === 0;
//    if (even) {
//        var v1 = findKth(nums1, nums2, half - 1, 0, nums1.length - 1, 0, nums2.length - 1);
//        var v2 = findKth(nums1, nums2, half, 0, nums1.length - 1, 0, nums2.length - 1);
//        return (v1 + v2) / 2;
//    } else {
//        return findKth(nums1, nums2, half, 0, nums1.length - 1, 0, nums2.length - 1);
//    }
};

var findKth = function(a, b, k, aS, aE, bS, bE) {
    var aL = aE - aS + 1;
    var bL = bE - bS + 1;

    if (aL === 0) {
        return b[bS + k];
    }
    if (bL === 0) {
        return a[aS + k];
    }
    if (k === 0) {
        return a[aS] < b[bS] ? a[aS] : b[bS];
    }

    var ka = (k + 1) * aL / (aL + bL);
    var kb = (k + 1) - ka;

    ka += aS;
    kb += bS;

    ka = ~~ka;
    kb = ~~kb;

    if (a[ka] > b[kb]) {
        k -= (kb - bS);
        aE = ka;
        bS = kb;
    } else {
        k -= (ka - aS);
        bE = kb;
        aS = ka;
    }
    return findKth(a, b, k, aS, aE, bS, bE);
};