import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'central-casting';
  routerSub: Subscription;
  routeChanged: boolean = false;

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router) {
      auth.user$.subscribe(user => {
        if (user) {
          userService.save(user);
          const returnUrl = localStorage.getItem('returnUrl');
          if (returnUrl) {
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
          }
        }
      });
  }
}
