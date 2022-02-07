import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services';

@Component({ templateUrl: 'login.component.html', styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error: string;

    constructor(
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService
    ) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
            password: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9!@#$%^&*()]+$")])
        });

        this.returnUrl = 'http://onecause.com';
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    window.location.href = this.returnUrl;
                },
                error => {
                    this.error = 'Username or Password is incorrect.';
                    this.loading = false;
                }
            )
    }
}