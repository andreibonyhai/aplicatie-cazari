"use strict";
var KeyValuePair = (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
var Dictionary = (function () {
    function Dictionary(dict) {
        this.dict = dict;
        if (dict == null)
            this.dict = new Array();
    }
    Dictionary.prototype.add = function (key, data) {
        if (!this.hasKey(key))
            this.dict.push(new KeyValuePair(key, data));
    };
    Dictionary.prototype.hasKey = function (key) {
        return this.dict.some(function (e) { return e.key === key; });
    };
    Dictionary.prototype.get = function (key) {
        for (var _i = 0, _a = this.dict; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.key === key)
                return e.value;
        }
        return null;
    };
    Dictionary.prototype.remove = function (key) {
        var index = -1;
        for (var i = 0; i < this.dict.length; i++) {
            if (this.dict[i].key === key) {
                index = i;
                break;
            }
        }
        this.dict.splice(index, 1);
    };
    Dictionary.prototype.toList = function () {
        return this.dict;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
var SimpleDictionary = (function () {
    function SimpleDictionary(elements) {
        if (elements != null && elements.length > 0) {
            this.initDictionary(elements);
        }
    }
    SimpleDictionary.prototype.initDictionary = function (elements) {
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            for (var prop in element) {
                if (element.hasOwnProperty(prop)) {
                    if (this.hasKey(prop))
                        throw "Invalid initialization data. The elements must have unique keys";
                    this.add(prop, element[prop]);
                }
            }
        }
    };
    SimpleDictionary.prototype.add = function (key, data) {
        this[key] = data;
    };
    SimpleDictionary.prototype.hasKey = function (key) {
        return this.hasOwnProperty(key);
    };
    SimpleDictionary.prototype.get = function (key) {
        return this[key];
    };
    SimpleDictionary.prototype.toString = function () {
        return JSON.stringify(this);
    };
    SimpleDictionary.prototype.toList = function () {
        var result = new Array();
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                var obj = {};
                obj[prop] = this[prop];
                result.push(obj);
            }
        }
        return result;
    };
    return SimpleDictionary;
}());
exports.SimpleDictionary = SimpleDictionary;
