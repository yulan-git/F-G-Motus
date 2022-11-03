import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
 
  constructor() {}

  // --- METHODES SET ---
  async setWords(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }

  async setParties(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }

  async setWonParties(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }

  async setTry(key: string, value: any): Promise<void> {
    await Storage.set({key: key, value: value})
  }

  // --- METHODES GET ---
  async getWords(): Promise<any> {
    return await Storage.get({key: "words"})
  }

  async getParties(): Promise<any> {
    return await Storage.get({key: "parties"})
  } 

  async getWonParties(): Promise<any> {
    let value:any;
    await Storage.get({key: "wonGame"}).then(data=>{
      value = data.value
    })
    return value
  }

  async getTry(): Promise<any> {
    return await Storage.get({key: "try"})
  }

  // --- METHODES TO CLEAR ---
  async clearStorage() {
    await Storage.clear();
  }




}
