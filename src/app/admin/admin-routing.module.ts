import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from './user/user.component';
import {MovieComponent} from './movie/movie.component';
import {LayoutComponent} from './layout/layout.component'
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  {
    path: "",  
    component: LayoutComponent,
    children: [
      {path: "", redirectTo: 'user'},
      {path: "user", component: UserComponent},
      {path: "movie", component: MovieComponent},
      {path: "movie/add", component: AddMovieComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
