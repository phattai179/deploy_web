import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {AuthService} from 'src/app/core/services/auth.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  constructor(private auth: AuthService) { }

  currentUser: any = null;
  // Subcription có hàm unsubscribe khi hk cần thay đổi
  currentUserSubcription: Subscription | null = null

  ngOnInit(): void {
    // Chỉ lấy được 1 lần duy nhất khi currentUser trong AuthService thay đổi, ta sẽ không lấy được value mới
    // this.currentUser = this.auth.currentUser.value

    // Theo dõi sự thay đổi của biến currentUser trong service, mỗi lần currentUser thay đổi sẽ nhảy vào trong callback next và nhận được giá trị mới
    this.auth.currentUser.asObservable().subscribe({
      next: (result) => {
        this.currentUser = result;

      }
    })

  }

  // Chạy trước khi component bị hủy
  ngOnDestroy(): void{
    // Hủy theo dõi biến currentUser khi component bị unmount
    this.currentUserSubcription?.unsubscribe()
  }

}
