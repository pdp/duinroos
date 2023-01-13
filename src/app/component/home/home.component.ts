import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  activeMenuItem: MenuItem;

  constructor() {
      this.items = [
          {label: 'Welkom', icon: 'pi pi-fw pi-home'},
          {label: 'Fotos', icon: 'pi pi-fw pi-calendar'},
          {label: 'Beschrijving', icon: 'pi pi-fw pi-pencil'},
          {label: 'Omgeving', icon: 'pi pi-fw pi-file'},
          {label: 'Klachten', icon: 'pi pi-fw pi-cog'}
    ]
    this.activeMenuItem = this.items[0];
  }


  ngOnInit() {
  }

}
