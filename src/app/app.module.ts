//  The Root Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { QplComponent } from './qpl/qpl.component';
import { FootComponent } from './qpl/foot/foot.component';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        QplComponent,
        FootComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
