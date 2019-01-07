// Every component must be declared in some module to be used. Copy this code into src/app/app.module.ts:
// This is going to be main Module of our app so we add the bootstrap attribute inside the @NgModule annotation. It specifies which component should be used upon the start of our application.


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent],
})

export class AppModule {

}