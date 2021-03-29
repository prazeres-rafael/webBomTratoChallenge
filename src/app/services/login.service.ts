import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterService } from '../models/filter.service';
import { LoginPage } from '../models/login';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    [x: string]: any;

    constructor(private httpClient: HttpClient) { }

    baseUrl = environment.baseUrlLogin;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
    };

    authLogin(filterLogin: FilterService): Observable<LoginPage> {
        return this.httpClient.get<LoginPage>(this.baseUrl + filterLogin.users);
    }

}
