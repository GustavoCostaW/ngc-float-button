import { NgcFloatButtonComponent } from './components/ngc-float-button.component';
import { NgcFloatItemButtonComponent } from './components/ngc-float-item-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [NgcFloatButtonComponent, NgcFloatItemButtonComponent],
  exports:[NgcFloatButtonComponent, NgcFloatItemButtonComponent]
})

export class NgcFloatButtonModule { }