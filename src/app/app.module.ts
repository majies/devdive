import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PortalModule} from "@angular/cdk/portal";

import { AppRoutingModule } from './app-routing.module';
import {AppComponent, TabsWithPortal, TabWithPortal} from './app.component';

import {
  IconModule,
  LinkModule,
  ButtonModule,
  HeaderModule,
  TabsModule,
  TypographyModule,
  ChipModule
} from "@components";

@NgModule({
  declarations: [
    AppComponent,
    TabsWithPortal,
    TabWithPortal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LinkModule,
    IconModule,
    ButtonModule,
    HeaderModule,
    TabsModule,
    TypographyModule,
    PortalModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
