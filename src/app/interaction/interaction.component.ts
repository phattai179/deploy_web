import { Component, OnInit, ViewChild } from '@angular/core';
import {MovieListComponent} from './movie-list/movie-list.component'

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {


  @ViewChild("movieList") movieListComponent!: MovieListComponent

  // movie: chứa giá trị bộ phim được tạo mới
  // Cách 1
  // newMovie: any
  constructor() { }

  ngOnInit(): void {
  }

  handleAddMovie(movie: any){
    console.log(movie)
    // Cách 1 : Truyền input
    //this.newMovie = movie;

    // Cách 2 : viewChild
    this.movieListComponent.movieList.push(movie)
  }



}
