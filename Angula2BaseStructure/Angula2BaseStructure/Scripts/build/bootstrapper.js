///<reference path="../../typings/browser.d.ts"/>
///<reference path="../../typings/jquery.d.ts"/>
"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_component_1 = require("./Main/app.component");
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS
]);
