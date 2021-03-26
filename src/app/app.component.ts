import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'webBomTratoChallenge';
  constructor() {
    setTheme('bs4'); // or 'bs4'
  }
}
