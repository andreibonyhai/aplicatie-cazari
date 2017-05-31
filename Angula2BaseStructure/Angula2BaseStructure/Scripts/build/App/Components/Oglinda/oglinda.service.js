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
var core_1 = require('@angular/core');
var api_service_1 = require("../../Infrastructure/Api/api.service");
var OglindaService = (function () {
    function OglindaService(apiService) {
        this.apiService = apiService;
    }
    OglindaService.prototype.testDorm = function (i) {
        var _this = this;
        this.apiService.get($('#dorm-url').text()).then(function (result) {
            _this.dorm = result;
            console.log(result);
        });
    };
    OglindaService.prototype.createDorm = function (i) {
        var _this = this;
        this.apiService.get($("#dorm-url").text() + "/GetDorm?dormId=" + i).then(function (res) {
            console.log(res, "create dorm get");
            _this.dorm = res;
        });
        return this.dorm;
    };
    OglindaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], OglindaService);
    return OglindaService;
}());
exports.OglindaService = OglindaService;
//# sourceMappingURL=oglinda.service.js.map