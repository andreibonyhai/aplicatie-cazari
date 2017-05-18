import { Injectable } from "@angular/core";
import {ApiService} from "../Api/api.service";
import {StorageService} from "../Storage/storage.service";
import {RequestOptions, Headers} from "@angular/http";
import {CustomHttpService} from "../Http/custom-http.service";
import "rxjs/add/operator/toPromise";

import {User} from "../../Entities/User";

@Injectable()
export class AuthService {
    private authUrl: string = $("#auth-url").text();

    constructor(private http: CustomHttpService, private storageService: StorageService) {
        this.token = this.storageService.get("api-bearer-token");
        const user = JSON.parse(this.storageService.get("api-user"));
        if (user != null) {
            this.user.copy(user as User);
        }
    }

    register(username: string, email: string, password: string, firstName: string, lastName: string): Promise<void> {
        return this.http.post(this.authUrl + "/Register", { username, email, password, firstName, lastName })
            .toPromise().then(r => { });
    }

    login(username: string, password: string): Promise<void> {
        return this.http.post("/token", `username=${username}&password=${password}&grant_type=password`).toPromise().then(r => {
            this.token = r.json().access_token;
            this.storageService.set("api-bearer-token", this.token);
            const options = new RequestOptions();
            options.headers = new Headers({ "Authorization": `Bearer ${this.token}` });
            this.http.get(this.authUrl + "/UserDetails", options)
                .toPromise().then(r => {
                    const user = r.json() as User;
                    this.storageService.set("api-user", JSON.stringify(user));
                    this.user.copy(user as User);
                });
        });
    }

    logout(): Promise<void> {
        this.storageService.clear();
        this.token = null;
        this.user = new User();
        return Promise.resolve();
    }

    private user: User = new User();
    get User(): User {
        return this.user;
    }

    get IsLoggedIn(): boolean {
        return this.token != null;
    }

    private token: string = null;
    get Token(): string {
        if (this.token == null) {
            throw "You are not authenticated";
        }
        return this.token;
    }
}