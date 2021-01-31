import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap8Component } from './baitap8/baitap8.component';
import { Baitap8Module } from './baitap8/baitap8.module';
import { AdminGuard } from './core/guards/admin.guard';
import {DemoComponent} from './demo/demo.component';
// import {MainModule} from './main/main.module';
// import {AdminModule} from './admin/admin.module'


// Dùng routes thì hk cần thiết phải export component 
const routes: Routes = [
  // {path: "", component: DemoComponent},
  // {path: "baitap2", component: Baitap2Component},
  // {path: "baitap8", component: Baitap8Component},
  // {path: "baitap8", loadChildren: () => Baitap8Module},

  // patchMatch : 'full' giống exact trong react
  // Khi gắn module vào router không cần gắn vào mảng import của module đó nữa
  // {path: "admin", loadChildren: () => AdminModule},
  // {path: "", loadChildren: () => MainModule},

  // Ứng dụng lazyLoad để 
  {path: "admin", 
  loadChildren: () => 
  import("./admin/admin.module").then((m) => m.AdminModule), 
  canActivate: [AdminGuard]
  },

  {path: "", loadChildren: () => import("./main/main.module").then((m) => m.MainModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
