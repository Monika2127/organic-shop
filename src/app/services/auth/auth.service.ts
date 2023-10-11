import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AppUser } from 'src/app/models/app-user';
import { UserService } from '../user-object/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$!: Observable<firebase.default.User|null>;

  constructor(
    public afAuth: AngularFireAuth, 
    private router: ActivatedRoute,
    private userSer: UserService
  ) { 
    this.user$ = this.afAuth.authState
  }

  loginUser() {
    let returnUrl = this.router.snapshot.queryParamMap['get']('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    const provider = new GoogleAuthProvider();
    this.afAuth.signInWithRedirect(provider);
  }

  logout() {
    this.afAuth.signOut();
  }

  //  this function modifies the firebase user to user object which is stored in the database
  get appUser$(): Observable<AppUser | null> {
    return this.user$.pipe(
      switchMap(user => user ? this.userSer.getUser(user?.uid).valueChanges() : of(null))
    )
  }

}


//  get the returnUrl and save it in local storage so that when the user logs in, it will redirect to that url only or default one