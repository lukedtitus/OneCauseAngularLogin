import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

const apiUrl = 'localhost';

@Injectable({ providedIn: 'root'})
export class AuthenticationService{
    token: string;

    constructor(private _http: HttpClient, private _router: Router, public datepipe: DatePipe) { }

    login(username, password) {
        let token = this.datepipe.transform((new Date), 'hhmm');
        console.log(token);
        //fix with api endpoint url
        return this._http.post<any>(`${apiUrl}/users/auth`, { username, password, token })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            }
        ));
    }
}