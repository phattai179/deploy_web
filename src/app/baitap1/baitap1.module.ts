import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SibarComponent } from './sibar/sibar.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SibarComponent, ContentComponent],
  imports: [
    CommonModule
  ],
  // export các component để có thể sử dụng ở bên ngoài module
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SibarComponent, 
    ContentComponent
  ]
})
export class Baitap1Module { }
