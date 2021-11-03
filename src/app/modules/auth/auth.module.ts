import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages';
import { LoginFormComponent } from './components';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes), 
  ],
  declarations: [LoginComponent, LoginFormComponent],

})
export class AuthModule {}
