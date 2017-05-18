"use strict";
var JsonConvert = (function () {
    function JsonConvert() {
    }
    JsonConvert.serializeObject = function (object) {
        return JSON.stringify(object);
    };
    JsonConvert.deserializeObject = function (json) {
        throw "Not implemented exception";
    };
    return JsonConvert;
}());
exports.JsonConvert = JsonConvert;
