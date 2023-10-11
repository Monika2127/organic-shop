import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authSer = inject(AuthService);
  const router = inject(Router);

  return authSer.user$.pipe(
    map(user => {
      //  this returns an Observable of boolean
      if (user) return true;

      router.navigate(['/login',], {
        queryParams: {
          returnUrl: state.url
        }
      });
      return false;
    })
  )
  
};


//  Major change came as earlier, canActivate is class based but now it is functional

//  this queryParams is for getting the url save/redirect to login page when we don't have the access to get the page
