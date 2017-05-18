"use strict";
var User = (function () {
    function User() {
        this.id = "";
        this.username = "";
        this.firstName = "";
        this.lastName = "";
    }
    Object.defineProperty(User.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Username", {
        get: function () {
            return this.username;
        },
        set: function (username) {
            this.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "FirstName", {
        get: function () {
            return this.firstName;
        },
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "LastName", {
        get: function () {
            return this.lastName;
        },
        set: function (lastName) {
            this.lastName = lastName;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.copy = function (user) {
        this.username = user.username;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    };
    return User;
}());
exports.User = User;
