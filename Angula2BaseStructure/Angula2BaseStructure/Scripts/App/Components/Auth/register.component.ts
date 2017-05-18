import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";

import {AuthService} from "../../Infrastructure/Auth/auth.service";

@Component({
    selector: "register",
    templateUrl: "./register.template.html",
    directives: [ROUTER_DIRECTIVES]
})
export class RegisterComponent {

    private model = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    };
    private isSubmitting = false;
    constructor(private authService: AuthService, private router: Router) {
    }

    register(username: string, email: string, password: string, firstName: string, lastName: string) {
        this.isSubmitting = true;
        this.authService.register(username, email, password, firstName, lastName).then(() => {
            this.isSubmitting = false;
            this.router.navigate(["Login"]);
        }).catch(() => this.isSubmitting = false);
    }
}