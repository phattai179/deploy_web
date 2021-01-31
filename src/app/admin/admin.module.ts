import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';
import { LayoutComponent } from './layout/layout.component';
import { AddMovieComponent } from './add-movie/add-movie.component';


@NgModule({
  declarations: [UserComponent, MovieComponent, LayoutComponent, AddMovieComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
