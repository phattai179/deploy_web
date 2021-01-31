import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MovieService} from 'src/app/core/services/movie.service'
import {MovieDetail} from 'src/app/core/models/movie'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetail: MovieDetail | null = null
  constructor(
    private activeRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe({
      next:(params) => {
        console.log('params', params)
        this.movieService.getMovieDetail(params.movieId).subscribe({
          next: (result) => {
            this.movieDetail = result;
            console.log('movieDetail', this.movieDetail)
          }
        })
      }
    })
  }


}
