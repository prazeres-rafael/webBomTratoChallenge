import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FilterService } from "../models/filter.service";
import { ProcessPage } from "../models/process";

@Injectable({
    providedIn: 'root'
})
export class ProcessService {
    [x: string]: any;

    constructor(private httpClient: HttpClient) { }

    baseUrl = environment.baseUrl;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
    }

    getProcess(filter: FilterService): Observable<ProcessPage> {
        return this.httpClient.get<ProcessPage>(this.baseUrl + filter.process)
    }

    addProcess(filter: FilterService): Observable<ProcessPage> {
        return this.httpClient.post<ProcessPage>(this.baseUrl + filter.process, filter.product)
    }

    editProcess(filter: FilterService): Observable<ProcessPage> {
        return this.httpClient.put<ProcessPage>(this.baseUrl + filter.process, filter.product)
    }

}