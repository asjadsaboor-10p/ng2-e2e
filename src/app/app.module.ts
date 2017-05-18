import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './start/app.component';
import { NavComponent } from './shared/navbar.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        NavComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
