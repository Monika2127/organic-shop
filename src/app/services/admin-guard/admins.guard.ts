import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { map, of, switchMap } from 'rxjs';
import { UserService } from '../user-object/user.service';

export const adminsGuard: CanActivateFn = (route, state) => {

  const authSer = inject(AuthService)
  const userSer = inject(UserService)

  return authSer.appUser$
  .pipe(
    map(appUser => appUser?.isAdmin ? true : false)
  )
  
};

// to make the user as an admin
