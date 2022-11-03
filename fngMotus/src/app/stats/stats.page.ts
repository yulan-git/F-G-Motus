import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-stats',
  templateUrl: 'stats.page.html',
  styleUrls: ['stats.page.scss']
})
export class StatsPage implements OnInit{

  playedWords: [] = [];
  parties: any;
  wonGame: any;
  try: any;

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
   this.setWords();
   this.setParties();
   this.setWonParties();
   this.setTry();
  }

  async setWords() {
    const { value } = await this.localStorage.getWords()
    this.playedWords = value.split(',');
  }

  async setParties() {
    let value = await this.localStorage.getParties()
    this.parties = value
  }

  async setWonParties() {
    let value = await this.localStorage.getWonParties()
    this.wonGame = value    
  }

  async setTry() {
    let value = await this.localStorage.getTry()
    //calcul average
    this.try = value
    
 
    
    
  }

  async clearStorage() {
    await this.localStorage.clearStorage();
  }
}
