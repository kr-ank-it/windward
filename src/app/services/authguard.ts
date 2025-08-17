import { Injectable } from '@angular/core';
import {AuthService} from './authservice';
import {Router} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Authguard {

  constructor(private authService:AuthService, private router:Router) {

  }
  // canActivate(): boolean {
  //   if (this.authService.validateToken()) {
  //     return true; // allow route
  //   }
  //   this.router.navigate(['/auth']); // redirect to login if not valid
  //   return false;
  // }
  canActivate(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/auth']);
      return of(false);
    }

    return this.authService.validateToken(token).pipe(
      map(user => {
        return !!user; // true if user exists, else false
      }),
      catchError(err => {
        this.router.navigate(['/auth']);
        return of(false);
      })
    );
  }
}
