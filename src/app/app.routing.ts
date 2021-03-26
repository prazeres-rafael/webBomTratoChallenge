import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginScreenComponent } from "./login-screen/login-screen.component";

const APP_ROUTES: Routes = [
    { path: '', component: LoginScreenComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { onSameUrlNavigation: "reload" });
