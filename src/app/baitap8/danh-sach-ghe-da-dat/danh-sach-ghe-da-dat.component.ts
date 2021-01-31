import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe-da-dat',
  templateUrl: './danh-sach-ghe-da-dat.component.html',
  styleUrls: ['./danh-sach-ghe-da-dat.component.scss']
})
export class DanhSachGheDaDatComponent implements OnInit {


  @Output() onRemove = new EventEmitter();
  danhSachGheDaDat: any[] = []
  constructor() {}

  ngOnInit(): void {
  }

  chonGhe(ghe: any){
    if(ghe.dangChon){
      this.danhSachGheDaDat.push(ghe)
    }else{
      this.danhSachGheDaDat = this.danhSachGheDaDat.filter(item => item.SoGhe !== ghe.SoGhe)
    };
  }

  huyGhe(soGhe: number) {
    this.danhSachGheDaDat = this.danhSachGheDaDat.filter(item => item.SoGhe !== soGhe);

    this.onRemove.emit(soGhe)

  }

}
