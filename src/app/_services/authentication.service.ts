import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

const apiUrl = 'http://localhost:8081';

@Injectable({ providedIn: 'root'})
export class AuthenticationService{
    token: string;

    constructor(private _http: HttpClient, private _router: Router, public datepipe: DatePipe) { }

    login(username, password) {
        let token = this.datepipe.transform((new Date), 'HH:mm');
        console.log(token);
        return this._http.post<any>(`${apiUrl}/login`, { username, password, token });
    }
}