import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {IconModule, LinkModule, ButtonModule, HeaderModule, TabListModule} from "@components";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LinkModule,
    IconModule,
    ButtonModule,
    HeaderModule,
    TabListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
