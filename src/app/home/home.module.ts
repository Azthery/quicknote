import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';

import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
  
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class HomeModule { }
