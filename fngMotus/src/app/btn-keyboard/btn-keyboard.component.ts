import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-keyboard',
  templateUrl: './btn-keyboard.component.html',
  styleUrls: ['./btn-keyboard.component.scss'],
})
export class BtnKeyboardComponent implements OnInit {
  @Input() btn: string;
  constructor() { }

  ngOnInit() {}

}
