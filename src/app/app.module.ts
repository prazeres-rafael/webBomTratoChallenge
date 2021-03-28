import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt'
import { HttpClientModule} from '@angular/common/http';
import { ProcessScreenComponent } from './process-screen/process-screen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProcessAddComponent } from './process-add/process-add.component';
import { NgxMaskModule } from 'ngx-mask';
import { registerLocaleData } from '@angular/common';
import { ProcessEditComponent } from './process-edit/process-edit.component';
import { RouterTestingModule } from "@angular/router/testing";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    ProcessScreenComponent,
    ProcessAddComponent,
    ProcessEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RouterTestingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }