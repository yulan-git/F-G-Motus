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

  async getlistWords() {
    const { value } = await this.localStorage.getWords()
    this.playedWords = value.split(',');
  }

  async clearStorage() {
    await this.localStorage.clearStorage();
  }
}
