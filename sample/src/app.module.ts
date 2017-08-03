import { NgcFloatButtonModule } from './../../index';
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    NgcFloatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
