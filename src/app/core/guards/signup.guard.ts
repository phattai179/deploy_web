import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from 'src/app/main/signup/signup.component'

@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanActivate, CanDeactivate<unknown> {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: SignupComponent, // Giống viewChild
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Return về true => cho phép rời khỏi route

    const isDirty = component.signupForm.dirty && !component.signupForm.submitted

    if (isDirty) {
      const isConfirm = confirm('Bạn có muốn rời khỏi, tất cả dữ liệu sẽ bị mất');
      return isConfirm
    }

    return true;
  }



}
