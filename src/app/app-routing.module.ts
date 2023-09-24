import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./component/homepage/homepage.component";
import {Router, RouterModule, Routes} from "@angular/router";




const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private router: Router) {
  }
}
