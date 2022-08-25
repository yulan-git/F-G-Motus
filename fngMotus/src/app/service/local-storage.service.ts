import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
 
  constructor() {}

  async setWords(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }

  // --- METHODES FOR LIST WORDS ---
  async getWords(key: string): Promise<any> {
    return await Storage.get({key: key})
  }
  async setAllParties(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }

  // --- METHODES FOR ALL PARTIES ---
  async getAllParties(key: string): Promise<void> {
    await Storage.get({key: key})
  }
  async setWonParties(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }

  // --- METHODES FOR WON PARTIES ---
  async getWonParties(key: string): Promise<void> {
    await Storage.get({key: key})
  }
  async setTrialAverage(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }

  // --- METHODES FOR TRIAL AVERAGE ---
  async getTrialAverage(key: string): Promise<void> {
    await Storage.get({key: key})
  }

  // --- METHODES TO CLEAR ---
  async clearStorage() {
    await Storage.clear();
  }




}
