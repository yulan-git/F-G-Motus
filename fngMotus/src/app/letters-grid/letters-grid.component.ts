import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters-grid',
  templateUrl: './letters-grid.component.html',
  styleUrls: ['./letters-grid.component.scss'],
})
export class LettersGridComponent implements OnInit {

  @Input() word;

  constructor() { 
  }

  ngOnInit() {}

}
