import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routeLanguage } from '../utils';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute
  ) { 
    routeLanguage(this.translate, this.route.snapshot.queryParamMap.get('language'));
  }

  ngOnInit(): void {
  }

}
