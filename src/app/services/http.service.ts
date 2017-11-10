import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    public get(url: string) {
        let headers = this.setHeaders();
        return this.http.get(url, { headers }).map((response) => {
            return response.json();
        }).catch(handleError);
    }

    public post(url: string, params: any) {
        let headers = this.setHeaders();
        return this.http.post(url, params, { headers }).map((response) => {
            return response.json();
        }).catch(handleError);
    }

    public delete(url: string) {
        let headers = this.setHeaders();
        return this.http.delete(url, { headers }).map((response) => {
            console.log(response);
            return response.json();
        }).catch(handleError);
    }

    public put(url: string, params: any) {
        let headers = this.setHeaders();
        return this.http.put(url, params, { headers }).map((response) => {
            return response.json();
        }).catch(handleError);
    }

    private setHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}

function handleError(error: any) {
    var response = JSON.parse(error._body);
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
}
