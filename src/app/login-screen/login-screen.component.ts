import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FilterService } from '../models/filter.service';
import { LoginPage } from '../models/login';
import { LoginService } from '../services/login.service';
import { routeLanguage } from '../utils';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  checkoutForm: FormGroup;
  email: string;
  pass: string;
  filter = {} as FilterService;
  userLogin: LoginPage;
  loginRecused = false;

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { 
    routeLanguage(this.translate, this.route.snapshot.queryParamMap.get('language'));
  }

  ngOnInit(): void {
    this.clearForm();
  }

  clearForm() {
    this.checkoutForm = this.formBuilder.group({
      loginEmail: [''],
      loginPass: ['']
    })
  }

  authLogin() {
    this.filter.users = 'users';
    this.email = this.checkoutForm.get('loginEmail').value;
    this.pass = this.checkoutForm.get('loginPass').value;
    this.loginService.authLogin(this.filter).subscribe(
      (infoLogin: LoginPage) => {
        if (infoLogin) {
          this.userLogin = infoLogin;
          if (this.email == infoLogin[0].email){
            if (this.pass == infoLogin[0].password) {
              this.loginRecused = false;

            } else {
              this.loginRecused = true;
            }
          } else {
            this.loginRecused = true;
          }
        }
      }
    )
  }

}
