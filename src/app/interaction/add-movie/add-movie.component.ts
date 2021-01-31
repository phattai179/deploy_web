import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  @Output () onAdd = new EventEmitter;

  constructor() {}

  ngOnInit(): void {
  }

  handleAddMovie(name: string, price: string, images: FileList | null){
    console.log('data', name, price, images)

    // Chuyển File về base64 để có thể hiện thị ra UI
    const file = images?.[0] as Blob; // Blod là file đọc dữ liệu
    const fileReader = new FileReader();


    fileReader.readAsDataURL(file)
    fileReader.onload = (evt) => {
      // console.log('evt', evt)
      
      // Sau khi sử lý xong thì mới vào xử lý
      const movie = {
        id: Math.floor(Math.random() * 100),
        name,
        price: parseInt(price),
        // image: images[0]
        image: evt?.target?.result
      }
  
      this.onAdd.emit(movie)
    }


    
}

}
