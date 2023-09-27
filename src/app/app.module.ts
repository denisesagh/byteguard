import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { HomepageComponent } from './component/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './component/products/products.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import {NgOptimizedImage} from "@angular/common";
import { ContactComponent } from './component/contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {RecaptchaFormsModule, RecaptchaModule} from "ng-recaptcha";
import { ContactDialogComponent } from './component/contact-dialog/contact-dialog.component';
import {MDCDialog} from "@material/dialog";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";







@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductsComponent,
    AboutusComponent,
    ContactComponent,
    ContactDialogComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule,
        NgOptimizedImage,
      ReactiveFormsModule,
      HttpClientModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireModule,
      AngularFireStorageModule,
      ReactiveFormsModule,

      RecaptchaModule,
      RecaptchaFormsModule,
      MatDialogModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
