import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './component/header/header.component';
import {MatTabsModule} from "@angular/material/tabs";
import { DatabaseComponent } from './component/all-products/database/database.component';
import { ItSecurityComponent } from './component/all-products/it-security/it-security.component';
import { WebsitenComponent } from './component/all-products/websiten/websiten.component';
import { SoftwareSolutionsComponent } from './component/all-products/software-solutions/software-solutions.component';








@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutusComponent,
    ContactComponent,
    HeaderComponent,
    DatabaseComponent,
    ItSecurityComponent,
    WebsitenComponent,
    SoftwareSolutionsComponent,
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
    BrowserAnimationsModule,

    RecaptchaModule,
    RecaptchaFormsModule,
    MatTabsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
