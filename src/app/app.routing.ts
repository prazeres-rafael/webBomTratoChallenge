import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ProcessAddComponent } from './process-add/process-add.component';
import { ProcessEditComponent } from './process-edit/process-edit.component';
import { ProcessScreenComponent } from './process-screen/process-screen.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginScreenComponent },
    { path: 'process', component: ProcessScreenComponent },
    { path: 'process-add', component: ProcessAddComponent },
    { path: 'process-edit/:id', component: ProcessEditComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { onSameUrlNavigation: 'reload' });
