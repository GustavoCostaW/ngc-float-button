import { NgcFloatItemButtonComponent } from './ngc-float-item-button.component';
import { NgcFloatButtonComponent } from './ngc-float-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgcFloatButtonComponent, NgcFloatItemButtonComponent],
  exports:[NgcFloatButtonComponent, NgcFloatItemButtonComponent]
})
export class NgcFloatButtonModule { }