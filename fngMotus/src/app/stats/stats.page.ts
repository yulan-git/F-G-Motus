import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-stats',
  templateUrl: 'stats.page.html',
  styleUrls: ['stats.page.scss']
})
export class StatsPage implements OnInit{
  storageStats: any;

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.storageStats = this.getStorage()
  }

  getStorage() {
    this.localStorage.getObject('stats').then((data: any) => {
      this.storageStats = data;
    });
    return this.storageStats
  }

  async clearStorage() {
    await this.localStorage.clearStorage();
  }
}
