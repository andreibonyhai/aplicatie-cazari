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
var storage_service_1 = require("../Storage/storage.service");
var http_1 = require("@angular/http");
var custom_http_service_1 = require("../Http/custom-http.service");
require("rxjs/add/operator/toPromise");
var User_1 = require("../../Entities/User");
var AuthService = (function () {
    function AuthService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.authUrl = $("#auth-url").text();
        this.user = new User_1.User();
        this.token = null;
        this.token = this.storageService.get("api-bearer-token");
        var user = JSON.parse(this.storageService.get("api-user"));
        if (user != null) {
            this.user.copy(user);
        }
    }
    AuthService.prototype.register = function (username, email, password, firstName, lastName) {
        return this.http.post(this.authUrl + "/Register", { username: username, email: email, password: password, firstName: firstName, lastName: lastName })
            .toPromise().then(function (r) { });
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post("/token", "username=" + username + "&password=" + password + "&grant_type=password").toPromise().then(function (r) {
            _this.token = r.json().access_token;
            _this.storageService.set("api-bearer-token", _this.token);
            var options = new http_1.RequestOptions();
            options.headers = new http_1.Headers({ "Authorization": "Bearer " + _this.token });
            _this.http.get(_this.authUrl + "/UserDetails", options)
                .toPromise().then(function (r) {
                var user = r.json();
                _this.storageService.set("api-user", JSON.stringify(user));
                _this.user.copy(user);
            });
        });
    };
    AuthService.prototype.logout = function () {
        this.storageService.clear();
        this.token = null;
        this.user = new User_1.User();
        return Promise.resolve();
    };
    Object.defineProperty(AuthService.prototype, "User", {
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "IsLoggedIn", {
        get: function () {
            return this.token != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "Token", {
        get: function () {
            if (this.token == null) {
                throw "You are not authenticated";
            }
            return this.token;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [custom_http_service_1.CustomHttpService, storage_service_1.StorageService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
