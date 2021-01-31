import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ErrorMassageComponent } from './error-massage/error-massage.component';



@NgModule({
  declarations: [ButtonComponent, CardComponent, ErrorMassageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    ErrorMassageComponent
  ]
})
export class ComponentsModule { }


