import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user-object/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Organic-shop';

  constructor(
    private auth: AuthService,
    private router: Router,
    private userSer: UserService
  ) {
    auth.user$.subscribe(user => {
      if(user) {

        userSer.save(user);

        let returnUrl = localStorage.getItem('returnUrl') || '/';
        this.router.navigateByUrl(returnUrl);
      }
    })
  }
}


//  here we are using the above code as to navigate to that page which user wants to go by url brfore logion

// here we don't need to unsubscribe coz this is the root element and this is going to be there throughout the application and this 
//  will not get added or removed anything from the DOM

//  whenever user logsIn, it will update the current name and email in the database
