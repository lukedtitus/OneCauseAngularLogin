import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from "@angular/common";

import { appRoutingModule } from './app.routing';
import { AppComponent } from "./app.component";
import { LoginComponent } from './login';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }