import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FireGuard implements CanActivate {
  constructor(
    private route:Router,
    private afAuth:AngularFireAuth
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.afAuth.authState.
    pipe(take(1))
    .pipe(map(authSate => !!authSate))
    .pipe(tap(auth =>{
      if(!auth) {
        this.route.navigate(['/'])
      }
    }));
  }
  
}
