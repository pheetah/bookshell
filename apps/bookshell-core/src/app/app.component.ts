import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'bookshellw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookshell-core';

  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.title = event.urlAfterRedirects.substring(1).toUpperCase();
      }
    });
  }

}
