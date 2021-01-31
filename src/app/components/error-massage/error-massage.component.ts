import { Component, OnInit, Input } from '@angular/core';
import {AbstractControl, NgModel} from '@angular/forms'

@Component({
  selector: 'app-error-massage',
  templateUrl: './error-massage.component.html',
  styleUrls: ['./error-massage.component.scss']
})
export class ErrorMassageComponent implements OnInit {

  @Input() control: AbstractControl | NgModel |  null = null
  @Input() name : string = ""
  message: any = {
    taiKhoan:{
      required: "Tài khoản không được để trống",
      minlength: "Tài khoản phải từ 3 đến 20 ký tự",
      maxlength: "Tài khoản phải từ 3 đến 20 ký tự"
    },

    matKhau:{
      required: "Mật khẩu không được để trống",
     
    },

    required: "Trường này không được để trống"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
