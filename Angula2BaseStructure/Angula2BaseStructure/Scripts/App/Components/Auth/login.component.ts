import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import {AuthService} from "../../Infrastructure/Auth/auth.service";

@Component({
    selector: "login",
    templateUrl: "./login.template.html",
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {
    private model = {
        username: "",
        password: ""
    };
    private isSubmitting = false;
    constructor(private authService: AuthService, private router: Router) {
    }

    login(username: string, password: string) {
        this.isSubmitting = true;
        this.authService.login(username, password).then(() => {
            this.isSubmitting = false;
            this.router.navigateByUrl("/");
        }).catch(() => this.isSubmitting = false);
    }
}