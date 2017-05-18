"use strict";
var ArrayExtensions = (function () {
    function ArrayExtensions() {
    }
    ArrayExtensions.toList = function (list) {
        var result = new Array();
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var element = list_1[_i];
            result.push(element);
        }
        return result;
    };
    return ArrayExtensions;
}());
exports.ArrayExtensions = ArrayExtensions;
