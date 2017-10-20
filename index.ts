import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcFloatButtonComponent } from './components/ngc-float-button.component';
import { NgcFloatItemButtonComponent } from './components/ngc-float-item-button.component';
import {MatIconModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [NgcFloatButtonComponent, NgcFloatItemButtonComponent],
  exports:[NgcFloatButtonComponent, NgcFloatItemButtonComponent]
})

export class NgcFloatButtonModule { }
