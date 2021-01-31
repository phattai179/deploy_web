import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms"
import {MovieService} from 'src/app/core/services/movie.service'

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  form: FormGroup = new FormGroup({
    tenPhim: new FormControl(""),
    biDanh: new FormControl(""),
    trailer: new FormControl(""),
    hinhAnh: new FormControl(""),
    moTa: new FormControl(""),
    ngayKhoiChieu: new FormControl(""),
  })
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  handleChangeFile(evt: any){
    const file = evt.target.files[0]

    // patchValue chỉ thay đổi 1 giá trị trong form
    // setValue thay đổi giá trị toàn bộ form
    // this.form.setValue()
    this.form.patchValue({
      hinhAnh: file
    })

  }

  handleSubmit(){
    console.log(this.form)
    this.movieService.addMovie(this.form.value).subscribe()
  }

}
