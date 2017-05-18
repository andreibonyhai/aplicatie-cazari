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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var Dictionary_1 = require("../DataStructures/Dictionary");
var CustomHttpService = (function () {
    function CustomHttpService(http) {
        this.http = http;
        this.subscriptions = new Array();
        this.activeRequests = new Dictionary_1.Dictionary();
    }
    CustomHttpService.prototype.subscribeErrorHandler = function (errorHandler) {
        if (this.subscriptions.find(function (e) { return e === errorHandler; }) == undefined) {
            this.subscriptions.push(errorHandler);
        }
    };
    CustomHttpService.prototype.unsubscribe = function (errorHandler) {
        this.subscriptions.splice(this.subscriptions.indexOf(errorHandler), 1);
    };
    CustomHttpService.prototype.onNext = function (request, response) {
        this.activeRequests.get(request).next(response);
    };
    CustomHttpService.prototype.onError = function (request, error) {
        var err = error.json();
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler(err);
        }
        this.activeRequests.get(request).error(error);
    };
    CustomHttpService.prototype.onComplete = function (request) {
        this.activeRequests.get(request).complete();
        this.activeRequests.remove(request);
    };
    CustomHttpService.prototype.generateObservable = function (request) {
        var _this = this;
        request.subscribe(function (response) { return _this.onNext(request, response); }, function (error) { return _this.onError(request, error); }, function () { return _this.onComplete(request); });
        return new Observable_1.Observable(function (subscriber) {
            _this.activeRequests.add(request, subscriber);
        });
    };
    CustomHttpService.prototype.get = function (url, options) {
        return this.generateObservable(this.http.get(url, options));
    };
    CustomHttpService.prototype.post = function (url, body, options) {
        return this.generateObservable(this.http.post(url, body, options));
    };
    CustomHttpService.prototype.put = function (url, body, options) {
        return this.generateObservable(this.http.put(url, body, options));
    };
    CustomHttpService.prototype.delete = function (url, options) {
        return this.generateObservable(this.http.delete(url, options));
    };
    CustomHttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CustomHttpService);
    return CustomHttpService;
}());
exports.CustomHttpService = CustomHttpService;
