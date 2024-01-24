import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlmoxarifeComponent } from '../almoxarife/almoxarife.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministrativoComponent } from '../administrativo/administrativo.component';

@NgModule({
    declarations: [
      AppComponent,
      AlmoxarifeComponent,
      AdministrativoComponent,
    ],
    imports: [
      NgModule,
      BrowserModule,
      CommonModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
    ],
    bootstrap: [AppComponent],
  })

export class AppModule { }