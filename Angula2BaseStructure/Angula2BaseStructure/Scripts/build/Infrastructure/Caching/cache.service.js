"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ResourceIdentifier = (function () {
    function ResourceIdentifier(_resource, _data) {
        this._resource = _resource;
        this._data = _data;
    }
    Object.defineProperty(ResourceIdentifier.prototype, "resource", {
        get: function () { return this._resource; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceIdentifier.prototype, "data", {
        get: function () { return this._data; },
        enumerable: true,
        configurable: true
    });
    ResourceIdentifier.prototype.equals = function (other) {
        return this.resource === other.resource
            && JSON.stringify(this.data) === JSON.stringify(other.data);
    };
    return ResourceIdentifier;
}());
exports.ResourceIdentifier = ResourceIdentifier;
var CacheService = (function () {
    function CacheService() {
        this.cacheObject = new Array();
    }
    CacheService.prototype.find = function (resourceId) {
        for (var _i = 0, _a = this.cacheObject; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.resourceId.equals(resourceId))
                return this.cacheObject.indexOf(element);
        }
        return -1;
    };
    CacheService.prototype.isCached = function (resourceId) {
        return this.find(resourceId) !== -1;
    };
    CacheService.prototype.cache = function (resourceId, data) {
        var idx = this.find(resourceId);
        if (idx === -1)
            this.cacheObject.push({ resourceId: resourceId, data: data });
        else
            this.cacheObject[idx].data = data;
    };
    CacheService.prototype.get = function (resourceId) {
        return this.cacheObject[this.find(resourceId)].data;
    };
    CacheService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CacheService);
    return CacheService;
}());
exports.CacheService = CacheService;
