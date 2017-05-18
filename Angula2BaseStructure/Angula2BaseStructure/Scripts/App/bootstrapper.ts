///<reference path="../../typings/browser.d.ts"/>
///<reference path="../../typings/jquery.d.ts"/>

import {provide, enableProdMode} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./Main/app.component";

enableProdMode();
bootstrap(AppComponent, [
    HTTP_PROVIDERS
]);