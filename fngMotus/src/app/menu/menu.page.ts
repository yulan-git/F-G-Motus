import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {
isStatsOpen: boolean = false;
  constructor() { }
  seeStats(isOpen: boolean) {
    this.isStatsOpen = isOpen;
  }
}
