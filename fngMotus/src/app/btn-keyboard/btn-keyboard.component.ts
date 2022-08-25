import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-keyboard',
  templateUrl: './btn-keyboard.component.html',
  styleUrls: ['./btn-keyboard.component.scss'],
})
export class BtnKeyboardComponent implements OnInit {
  @Input() btn: string;
  @Output() letter = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {}

  getLetterInput(letter: string){
    this.letter.emit(letter)
  }
}
