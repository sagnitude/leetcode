/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var insertItem = function(map, item, def) {
        if (map[item] === undefined) {
            map[item] = def === undefined ? 1 : def;
        } else {
            map[item] += 1;
        }
    };
    var wl = words[0].length;
    var wc = words.length;
    if (wl === 0) {
        return [];
    } else if (wl === 1 && wc === 1) {
        var r = [];
        for (var q = 0; q < s.length; q++) {
            if (s[q] === words[0]) {
                r.push(q);
            }
        }
        return r;
    }

    var result = [];

    var maps = [];
    var queues = [];

    var m = {};
    for (var k in words) {
        m[words[k]] = 1;
    }
    for (var j = 0; j < wl; j++) {
        maps.push(JSON.parse(JSON.stringify(m)));
    }

    for (var i = 0; i < s.length - wl; i++) {
        if (!maps[i % wl]) {
            maps[i % wl] = {};
        }
        var map = maps[i % wl];
        var sub = s.slice(i, i + wl);
        if (map[sub] !== undefined) {
            insertItem(queues, i % wl, 0);
            map[sub] -= 1;
            if (map[sub] === 0) {
                map[sub] = undefined;
            }
            if (wc === queues[i % wl]) {
                result.push(i - wl * (queues[i % wl] - 1));
                insertItem(map, s.slice(i - wl * queues[i % wl], i - wl * queues[i % wl] + wl));
                queues[i % wl] --;
            }
        } else {
            insertItem(map, sub);
            if (queues[i % wl] > 0) {
                if (s.slice(i - wl * queues[i % wl], i - wl * queues[i % wl] + wl) !== sub) {
                    while(queues[i % wl] > 0) {
                        insertItem(map, s.slice(i - wl * queues[i % wl], i - wl * queues[i % wl] + wl));
                        queues[i % wl] --;
                    }
                }
            }
        }
    }

    return result;


    //var wl = words[0].length;
    //var wc = words.length;
    //if (wl === 0) {
    //    return [];
    //} else if (wl === 1 && wc === 1) {
    //    var r = [];
    //    for (var q = 0; q < s.length; q++) {
    //        if (s[q] === words[0]) {
    //            r.push(q);
    //        }
    //    }
    //    return r;
    //}
    //var wt = buildTree(words);
    //var result = [];
    //for (var i = 0; i < wl; i++) {
    //    //offset : i
    //    var l = ~~((s.length - i) / wl);
    //    for (var j = 0; j <= l - wc; j++) {
    //        //i + j * wl -> i + j * wl + wc * wl
    //        var symbols = {};
    //
    //        var fail = false;
    //        var total = 0;
    //
    //        //i -> i + wc * wl
    //        for (var k = 0; k < wc; k++) {
    //            //i + j * wl + k * wl -> i + j * wl + (k + 1) * wl; k: 0 -> wc - 1
    //            var node = strInTree(s.slice(i + (k + j) * wl, i + (k + 1 + j) * wl), wt);
    //            if (node !== -1) {
    //                if (symbols[node.id]) {
    //                    symbols[node.id].count ++;
    //                    total ++;
    //                    if (symbols[node.id].count > node.count) {
    //                        fail = true;
    //                    }
    //                } else {
    //                    total++;
    //                    symbols[node.id] = {
    //                        count : 1,
    //                        max: node.count
    //                    };
    //                }
    //            }
    //        }
    //
    //        //compare symbols and wt
    //        if (total === wt.total && !fail) {
    //            result.push(i + j * wl);
    //        }
    //    }
    //}
    //if (result.length !== 0) {
    //    unique(result);
    //}
    //return result;
};

//function unique(arr) {
//    var result = [], hash = {};
//    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
//        if (!hash[elem]) {
//            result.push(elem);
//            hash[elem] = true;
//        }
//    }
//    return result;
//}
//
//function buildTree(words) {
//    var wl = words[0].length;
//    var wt = {};
//    var total = 0;
//    for (var j = 0; j < words.length; j++) {
//        var p = wt;
//        for (var k = 0; k < wl; k++) {
//            var c = words[j].charAt(k);
//            if (!p["c"+c]) {
//                p["c"+c] = {};
//            }
//            p = p["c"+c];
//        }
//        p.id = p.hasOwnProperty("id") ? p.id.concat([j]) : [j];
//        p.count = p.hasOwnProperty("count") ? p.count + 1 : 1;
//        total ++;
//    }
//    wt.total = total;
//    return wt;
//}
//
//function strInTree(str, tree) {
//    var p = tree;
//    for (var i = 0; i < str.length; i++) {
//        var char = p["c"+str[i]];
//        if (!char) {
//            return -1;
//        }
//        p = char;
//    }
//    return p;
//}