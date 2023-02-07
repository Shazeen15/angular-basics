// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// functions adding metadata to a class - tells angular we are creating a module
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {AppComponent} from "./app.component";
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  // providers: //for services
})
export class AppModule{}