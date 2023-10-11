import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user';


@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  currUser!: AppUser | null;

  constructor(
    public auth: AuthService
  ) {
    this.auth.appUser$.subscribe(user => this.currUser = user)
  }

  logout() {
    this.auth.logout()  
  }

}


//  One way to destroy the observable is to use ngOnDestroy and another thing is to use async pipe
//  When using the 1st way, it will automatically unsubscribe the observable when using async pipe

//  Here in service, when it is injected, it will call the constructor first so the user$ is already getting the data