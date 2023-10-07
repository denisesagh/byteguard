import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./component/contact/contact.component";
import {AboutusComponent} from "./component/aboutus/aboutus.component";
import {ProductsComponent} from "./component/products/products.component";
import {WebsitenComponent} from "./component/all-products/websiten/websiten.component";
import {SoftwareSolutionsComponent} from "./component/all-products/software-solutions/software-solutions.component";
import {DatabaseComponent} from "./component/all-products/database/database.component";
import {ItSecurityComponent} from "./component/all-products/it-security/it-security.component";




const routes: Routes = [
  //Austauschbare Componente
  { path: 'aboutUs', component: AboutusComponent },
  { path: '', redirectTo: 'aboutUs', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'aboutUs', component: AboutusComponent},

  //Produkte
  { path: 'websiten', component: WebsitenComponent},
  { path: 'software-solutions', component: SoftwareSolutionsComponent},
  { path: 'database', component: DatabaseComponent},
  { path: 'it-security', component: ItSecurityComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
