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
var custom_http_service_1 = require("../Http/custom-http.service");
require("rxjs/add/operator/toPromise");
var cache_service_1 = require("../Caching/cache.service");
var auth_service_1 = require("../Auth/auth.service");
var ApiService = (function () {
    function ApiService(http, cacheService, authService) {
        this.http = http;
        this.cacheService = cacheService;
        this.authService = authService;
    }
    ApiService.prototype.getReponse = function (data) {
        if (data == null || data.statusText === "No Content")
            return undefined;
        return data.json();
    };
    ApiService.prototype.get = function (resource, anonymous) {
        if (anonymous === void 0) { anonymous = null; }
        var options = new http_1.RequestOptions();
        options.headers = new http_1.Headers({ "Content-Type": "application/json" });
        if (!anonymous) {
            options.headers.append("Authorization", "Bearer " + this.authService.Token);
        }
        return this.http.get(resource, options).toPromise().then(this.getReponse);
    };
    ApiService.prototype.post = function (resource, data, anonymous) {
        if (anonymous === void 0) { anonymous = null; }
        var options = new http_1.RequestOptions();
        options.headers = new http_1.Headers({ "Content-Type": "application/json" });
        if (!anonymous) {
            options.headers.append("Authorization", "Bearer " + this.authService.Token);
        }
        return this.http.post(resource, JSON.stringify(data), options).toPromise().then(this.getReponse);
    };
    ApiService.prototype.put = function (resource, data, anonymous) {
        if (anonymous === void 0) { anonymous = null; }
        var options = new http_1.RequestOptions();
        options.headers = new http_1.Headers({ "Content-Type": "application/json" });
        if (!anonymous) {
            options.headers.append("Authorization", "Bearer " + this.authService.Token);
        }
        return this.http.put(resource, JSON.stringify(data), options).toPromise().then(this.getReponse);
    };
    ApiService.prototype.delete = function (resource, anonymous) {
        if (anonymous === void 0) { anonymous = null; }
        var options = new http_1.RequestOptions();
        options.headers = new http_1.Headers({ "Content-Type": "application/json" });
        if (!anonymous) {
            options.headers.append("Authorization", "Bearer " + this.authService.Token);
        }
        return this.http.delete(resource, options).toPromise().then(this.getReponse);
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [custom_http_service_1.CustomHttpService, cache_service_1.CacheService, auth_service_1.AuthService])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
