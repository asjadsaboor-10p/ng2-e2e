import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './start/app.component';
import { NavComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        ErrorComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
