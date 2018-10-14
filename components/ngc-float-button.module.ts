import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { NgcFloatButtonComponent, NgcFloatItemButtonComponent } from './ngc-float-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule
  ],
  declarations: [NgcFloatButtonComponent, NgcFloatItemButtonComponent],
  exports:[NgcFloatButtonComponent, NgcFloatItemButtonComponent]
})

export class NgcFloatButtonModule { }
