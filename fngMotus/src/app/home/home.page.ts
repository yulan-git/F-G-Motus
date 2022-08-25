import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage{
  buttons = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","Ent", "V", "W", "X", "Y", "Z"];
  letters = [];
  grid = [];

  playedWords = {
    key: "words",
    value: ["WORD", "ABORD", "MOTUS", "ACIDE"]
  };

  constructor(private localStorage: LocalStorageService) {}

  async ionViewWillEnter() {
    this.setListWords();
  }
 
  async setListWords() {
    let newTab=[];

    for (let i = 0; i < this.playedWords.value.length; i++){
      newTab.push(this.playedWords.value[i]);
    }
    await this.localStorage.setWords('words', newTab);
  }

  

  
}
