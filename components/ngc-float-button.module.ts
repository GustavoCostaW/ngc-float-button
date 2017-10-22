import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { NgcFloatButtonComponent } from './ngc-float-button.component';
import { NgcFloatItemButtonComponent } from './ngc-float-item-button.component';



@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [NgcFloatButtonComponent, NgcFloatItemButtonComponent],
  exports:[NgcFloatButtonComponent, NgcFloatItemButtonComponent]
})

export class NgcFloatButtonModule { }
