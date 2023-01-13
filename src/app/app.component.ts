import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'duinroos';

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
}
