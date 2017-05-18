import {Injectable} from "@angular/core";
import {Response, RequestOptions, Headers} from "@angular/http";
import {CustomHttpService} from "../Http/custom-http.service";
import "rxjs/add/operator/toPromise";

import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {CacheService, ResourceIdentifier} from "../Caching/cache.service";
import {KeyValuePair} from "../DataStructures/Dictionary";
import {ArrayExtensions as Extensions} from "../Extensions/ArrayExtensions";

import {AuthService} from "../Auth/auth.service";


@Injectable()
export class ApiService {
    constructor(private http: CustomHttpService, private cacheService: CacheService, private authService: AuthService) {
    }

    private getReponse<T>(data: any): T {
        if (data == null || data.statusText === "No Content") return undefined;
        return data.json() as T;
    }

    get<T>(resource: string, anonymous: boolean = null): Promise<T> {
        const options = new RequestOptions();
        options.headers = new Headers({ "Content-Type": "application/json" });
        if (!anonymous) {
            options.headers.append("Authorization", `Bearer ${this.authService.Token}`);
        }
        return this.http.get(resource, options).toPromise().then(this.getReponse);
    }

    post<T>(resource: string, data: any, anonymous: boolean = null): Promise<T> {
        const options = new RequestOptions();
        options.headers = new Headers({ "Content-Type": "application/json" });
        if (!anonymous) {
            options.headers.append("Authorization", `Bearer ${this.authService.Token}`);
        }
        return this.http.post(resource, JSON.stringify(data), options).toPromise().then(this.getReponse);
    }

    put<T>(resource: string, data: any, anonymous: boolean = null): Promise<T> {
        const options = new RequestOptions();
        options.headers = new Headers({ "Content-Type": "application/json" });
        if (!anonymous) {
            options.headers.append("Authorization", `Bearer ${this.authService.Token}`);
        }
        return this.http.put(resource, JSON.stringify(data), options).toPromise().then(this.getReponse);
    }

    delete<T>(resource: string, anonymous: boolean = null): Promise<T> {
        const options = new RequestOptions();
        options.headers = new Headers({ "Content-Type": "application/json" });
        if (!anonymous) {
            options.headers.append("Authorization", `Bearer ${this.authService.Token}`);
        }
        return this.http.delete(resource, options).toPromise().then(this.getReponse);
    }
}