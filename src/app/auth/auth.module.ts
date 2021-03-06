import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
