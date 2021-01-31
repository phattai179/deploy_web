import { Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnChanges {

  // @Input () newMovie: any;
  movieList: any[] = [
    {id: 1, name: "Avengers", price: 80000, image: "assets/img/Avengers-Infinity-War-ELLE-Man-featured-01-01.jpg"},
    {id: 2, name: "Cau Vang", price: 70000, image: "assets/img/CAUVANG-PAYOFFPOSTERFINAL.jpg"},
    {id: 3, name: "Quá Nhanh Quá Nguy Hiểm", price: 70000, image: "assets/img/fast-and-furious-8.jpg"},
    {id: 4, name: "Conan", price: 90000, image: "assets/img/maxresdefault.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
    // console.log('newMovie', this.newMovie)
  }

  // C1: Dùng truyền input
  // ngOnChanges giống như component didUpdate sẽ chạy sau khi input thay đổi 
  ngOnChanges(changes: any){
    // console.log('change', changes);
    // const {newMovie} = changes  
    // const movie = changes.newMovie.currentValue;
    // if( movie && movie?.currentValue?.id !== newMovie?.previousValue?.id){
    //   this.movieList.push(movie)
    // }
  }

  handleDeleteMovie (movieId: number){
    this.movieList = this.movieList.filter(movie => {
      return movie.id !== movieId
    })
  }

}
