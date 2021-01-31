import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {AuthService} from 'src/app/core/services/auth.service'
import {Router} from '@angular/router' 

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  constructor(private auth: AuthService, private router: Router) { 
    // FormGroup tương đương như 1 form chứa các ô input  
    this.signinForm = new FormGroup({
      // Form control giống như ô input với name là taiKhoan, MatKhau sẽ dc lấy giá trị và validation
      taiKhoan: new FormControl("",
      [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(29)
      ]),

      matKhau: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  handleSignin(){
    // Check tất cả lỗi nếu không thỏa sẽ hiện thị ra màn hình
    this.signinForm.markAllAsTouched()
    if(this.signinForm.invalid) return
    console.log(this.signinForm.value)

    this.auth.signin(this.signinForm.value).subscribe({
      next: (result) => {

        // set value cho currentUser trong authService
        this.auth.currentUser.next(result)

        // Lưu xướng localStorage
        localStorage.setItem('user', JSON.stringify(result))


        const {maLoaiNguoiDung} = result;

        if((window as any).PATH) {
          console.log((window as any).PATH)
          this.router.navigateByUrl((window as any).PATH);
          (window as any).PATH = null
        }else if(maLoaiNguoiDung === 'QuanTri'){
          this.router.navigateByUrl('/admin')
        }else{
          this.router.navigateByUrl('/');

        }

        // if(maLoaiNguoiDung === 'QuanTri'){
        //   this.router.navigateByUrl('/admin')
        // }else{
        //   // window.Path = this.router.url;
        //   // goback về
        //   // this.router.navigateByUrl(window.path)
        //   this.router.navigateByUrl('/');
        // }
      },

      error: (err) => {
        console.log(err.error)
      }
    })
  }



}
