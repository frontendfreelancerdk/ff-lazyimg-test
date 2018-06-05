import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgFfLazyimgModule } from "ng-ff-lazyimg";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFfLazyimgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
