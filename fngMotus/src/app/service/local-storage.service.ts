import { Injectable } from '@angular/core';
import { GetResult, Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
 
  constructor() {}

  async setWords(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }

  async getWords(): Promise<any> {
    return await Storage.get({key: "words"})
  }

  async setParties(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }
 
  async getParties(): Promise<void> {
    await Storage.get({key: "parties"})
  } // changer les paramètres avec les bonnes clés

  async setWonParties(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }

  async getWonParties(key: string): Promise<void> {
    await Storage.get({key: key})
  }

  async setTrialAverage(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }

  async getTrialAverage(key: string): Promise<void> {
    await Storage.get({key: key})
  }

  // --- METHODES TO CLEAR ---
  async clearStorage() {
    await Storage.clear();
  }




}
