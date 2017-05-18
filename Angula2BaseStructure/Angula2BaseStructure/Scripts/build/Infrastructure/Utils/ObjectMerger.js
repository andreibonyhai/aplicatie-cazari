"use strict";
var ObjectMerger = (function () {
    function ObjectMerger() {
    }
    ObjectMerger.merge = function (source1, source2) {
        var result = new Object();
        for (var prop in source1) {
            if (source1.hasOwnProperty(prop))
                result[prop] = source1[prop];
        }
        for (var prop in source2) {
            if (source2.hasOwnProperty(prop))
                result[prop] = source2[prop];
        }
        return result;
    };
    return ObjectMerger;
}());
exports.ObjectMerger = ObjectMerger;
