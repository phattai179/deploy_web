import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Baitap8Component } from './baitap8.component';


// Dùng routes thì hk cần thiết phải export component 
const routes: Routes = [
  {path: "", component: Baitap8Component},
];

@NgModule({
    // Sửa lại forRoot thành forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Baitap8RoutingModule {}
