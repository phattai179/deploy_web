import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from '../models/movie'
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http'
import {ApiService} from './api.service'

@Injectable({
  // Không cần import vào trong mảng provider ở trong appModule.ts khi có providedIn: 'root'
  providedIn: 'root'
})
export class MovieService { 

  constructor(private http: HttpClient, private api : ApiService) { }

  getMovieList(): Observable<Movie[]> {
    // const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim';

    const url = 'QuanLyPhim/LayDanhSachPhim'

    let params = new HttpParams();
    params = params.append('maNhom', 'GP01')
    // return this.http.get<Movie[]>(url, {params});
    return this.api.get<Movie[]>(url, {params});

    // Tạo header
    // const header = {
    //   Authorizatiohn: 'BEARER'
    // }

    // return [
    //   { id: 1, name: "Avengers", price: 80000, image: "assets/img/Avengers-Infinity-War-ELLE-Man-featured-01-01.jpg" },
    //   { id: 2, name: "Cau Vang", price: 70000, image: "assets/img/CAUVANG-PAYOFFPOSTERFINAL.jpg" },
    //   { id: 3, name: "Quá Nhanh Quá Nguy Hiểm", price: 70000, image: "assets/img/fast-and-furious-8.jpg" },
    //   { id: 4, name: "Conan", price: 90000, image: "assets/img/maxresdefault.jpg" }
    // ]
  }


  getMovieDetail(movieId: string) : Observable<MovieDetail>{
    // const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim`;
    const url = `QuanLyPhim/LayThongTinPhim`;

    let params = new HttpParams();
    params = params.append('maPhim', movieId)
    // return this.http.get<MovieDetail>(url, {params})
    return this.api.get<MovieDetail>(url, {params})

  }

  addMovie(movie: any) : Observable<any>{
    const url = `QuanLyPhim/ThemPhimUploadHinh`;

    // Nếu truyền file lên Api thì phải dùng formData
    const formData = new FormData()
    for(let item in movie){
      formData.append(item, movie[item]);
    }

    formData.append('maNhom', 'GP01')


    return this.api.post(url, formData)
  }

  // getMovieListPromise() : Promise<Movie[]> {
  //   return new Promise((resolse, reject) => {
  //     setTimeout(() => {
  //       resolse([
  //         { id: 1, name: "Avengers", price: 80000, image: "assets/img/Avengers-Infinity-War-ELLE-Man-featured-01-01.jpg" },
  //         { id: 2, name: "Cau Vang", price: 70000, image: "assets/img/CAUVANG-PAYOFFPOSTERFINAL.jpg" },
  //         { id: 3, name: "Quá Nhanh Quá Nguy Hiểm", price: 70000, image: "assets/img/fast-and-furious-8.jpg" },
  //         { id: 4, name: "Conan", price: 90000, image: "assets/img/maxresdefault.jpg" }
  //       ])

  //       //reject('Error fetching')

  //     }, 2000)
  //   })
  // }


  // getMovieListObservable() : Observable<Movie[]> {
  //   return new Observable(subscribe => {
  //     setTimeout(() => {
  //       // subscribe.error('Fetching error')

  //       subscribe.next(
  //         [
  //           { id: 1, name: "Avengers", price: 80000, image: "assets/img/Avengers-Infinity-War-ELLE-Man-featured-01-01.jpg" },
  //           { id: 2, name: "Cau Vang", price: 70000, image: "assets/img/CAUVANG-PAYOFFPOSTERFINAL.jpg" },
  //           { id: 3, name: "Quá Nhanh Quá Nguy Hiểm", price: 70000, image: "assets/img/fast-and-furious-8.jpg" },
  //           { id: 4, name: "Conan", price: 90000, image: "assets/img/maxresdefault.jpg" }
  //         ]
  //       )

  //       subscribe.complete()
  //     },2000)
  //   })
  // }



}

