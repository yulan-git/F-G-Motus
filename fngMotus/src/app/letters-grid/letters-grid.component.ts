import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters-grid',
  templateUrl: './letters-grid.component.html',
  styleUrls: ['./letters-grid.component.scss'],
})
export class LettersGridComponent implements OnInit {

  @Input() letter: string;
  letters = [];

  constructor() { 
    for(let index=0; index<5; index++) {
      this.letters.push("")
    }
  }

  ngOnInit() {}

}
