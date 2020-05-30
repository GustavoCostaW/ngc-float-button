import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgcFloatButtonComponent } from './ngc-float-button.component';
import { NgcFloatItemButtonComponent } from './ngc-float-item-button.component';




@NgModule({
  imports: [
    CommonModule,
    // MatIconModule
  ],
  declarations: [NgcFloatButtonComponent, NgcFloatItemButtonComponent],
  exports:[NgcFloatButtonComponent, NgcFloatItemButtonComponent]
})

export class NgcFloatButtonModule { }
