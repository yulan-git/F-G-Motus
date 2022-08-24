import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  buttons = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","Ent", "V", "W", "X", "Y", "Z"];
  letters = [];
  grid = [];

  constructor() {
    for(let index=0; index<6; index++) {
      this.grid.push(this.letters)
    }
  }
}
