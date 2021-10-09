import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MaterialModule,
  ]
})
export class HomeModule { }
