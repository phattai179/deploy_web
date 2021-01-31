import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { IndexContentComponent } from './index-content/index-content.component';
import { ItemComponent } from './item/item.component';
import { Baitap2Component } from './baitap2.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, IndexComponent, IndexContentComponent, ItemComponent, Baitap2Component],
  imports: [
    CommonModule
  ],
  exports : [
    // HeaderComponent,
    // SidebarComponent, 
    // FooterComponent, 
    // IndexComponent, 
    // IndexContentComponent, 
    // ItemComponent
    Baitap2Component
  ]
})
export class Baitap2Module { }
