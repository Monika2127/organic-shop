import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private auth: AuthService
  ) {
    
  }

  login() {
    this.auth.loginUser();
  }

}


//  signInWithRedirect -> this is to implement OAuth, 
//   this will redirect the users to one of the OAuth providers such as Google, Facebook, Github, etc.
