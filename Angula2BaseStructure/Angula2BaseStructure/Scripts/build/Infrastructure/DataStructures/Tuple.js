"use strict";
var Tuple = (function () {
    function Tuple(_item1, _item2) {
        this._item1 = _item1;
        this._item2 = _item2;
    }
    Object.defineProperty(Tuple.prototype, "item1", {
        get: function () { return this._item1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tuple.prototype, "item2", {
        get: function () { return this._item2; },
        enumerable: true,
        configurable: true
    });
    return Tuple;
}());
exports.Tuple = Tuple;
