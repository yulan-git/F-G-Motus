import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-stats',
  templateUrl: 'stats.page.html',
  styleUrls: ['stats.page.scss']
})
export class StatsPage implements OnInit{

  playedWords: [] = [];

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
   this.getlistWords();
  }

  getlistWords() {
    this.localStorage.getWords('words').then((data: any) => {
      this.playedWords = data.value.split(',');
    })
  }
 
 

}
