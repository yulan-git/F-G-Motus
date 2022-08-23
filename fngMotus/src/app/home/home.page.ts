import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  letters = [];
  grid = [];

  constructor() {
    for(let index=0; index<6; index++) {
      this.grid.push(this.letters)
    }

  }

}
