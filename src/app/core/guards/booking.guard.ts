import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from 'src/app/core/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // Chạy tới debugger sẽ đứng lại để xem lại
      // debugger
      const currentUser = this.auth.currentUser.value;

      if(currentUser){
        return true;
      }

      (window as any).PATH = state.url

    alert('Bạn chưa đăng nhập')
    this.route.navigateByUrl('/signin')
    return false;
  }



  
}
