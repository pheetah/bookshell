import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bookshellw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  display = false;
  items!:any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: (click:any) => {
          this.display = false;
          this.router.navigate(['']);
        }
      },
      {
          label: 'Mining Book',
          icon: 'pi pi-book',
          command: (click:any) => {
            this.display = false;
            this.router.navigate(['mining-book']);
          }
      }
  ];

  }

  onClick(){
    this.router.navigate(['mining-book'])
  }
}
