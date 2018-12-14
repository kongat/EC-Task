import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ScrollPanelModule} from 'primeng/scrollpanel';


import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {IconPlusCircle, IconMinusCircle } from 'angular-feather';



@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    IconPlusCircle,
    IconMinusCircle,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    CardsComponent,
    CardDetailComponent,
    WelcomePageComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
