import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return Observable.create(observer => {
      this.data.isLogged().subscribe((res: any) => {
        if (res.access) {
          observer.next(true);
        }
        else {
          this.router.navigate(['/signIn']);
          
          observer.next(false);
        }
      })
    })
  }


  constructor(private data: DataService, private router: Router) {

  }
}