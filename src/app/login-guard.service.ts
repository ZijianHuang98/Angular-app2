import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{
  private isLogin = false
  canActivate(){
    if(this.isLogin)
    return true
    else
    return false

  }

}
