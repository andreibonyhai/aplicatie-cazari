import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from '@angular/core';
import {Router, RouterOutlet, ComponentInstruction} from '@angular/router-deprecated';
import {AuthService} from "../Auth/auth.service";


@Directive({
    selector: "router-outlet-secure"
})
export class AuthRouter extends RouterOutlet {
    private parentRouter: Router;
    private publicRoutes = {
        'login': true,
        'register': true
    };

    constructor(viewContainerRef: ViewContainerRef,
        loader: DynamicComponentLoader, parentRouter: Router, @Attribute("name") nameAttr: string,
        private authService: AuthService) {
        super(viewContainerRef, loader, parentRouter, nameAttr);
        this.parentRouter = parentRouter;
    }

    activate(instruction: ComponentInstruction) {
        const url = instruction.urlPath;
        if (!this.publicRoutes[url] && !this.authService.IsLoggedIn) {
            this.parentRouter.navigateByUrl("/login");
        }
        if (this.publicRoutes[url] && this.authService.IsLoggedIn) {
            this.parentRouter.navigateByUrl("/");
        }
        return super.activate(instruction);
    }
}