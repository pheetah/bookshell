import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bookshellw-mining-book-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class RemoteEntryComponent {

  constructor(private router:Router){}

  items!: any[];

  ngOnInit() {
    this.items = [
      {label: 'Data Quality', icon: 'pi pi-fw pi-home', command: (click:any) => {
        this.router.navigate(['mining-book', { outlets: { part1: ['dataquality'] } }]);
      }},
      {label: 'Major Tasks', icon: 'pi pi-fw pi-calendar', command: (click:any) => {
        this.router.navigate(['mining-book', { outlets: { part1: ['majortasks'] } }]);
      }},
    ];
  }
}
