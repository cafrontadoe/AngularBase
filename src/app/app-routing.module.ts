import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import { FormTestComponent } from './form-test/form-test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
    { path: 'formTest', component: FormTestComponent },
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
