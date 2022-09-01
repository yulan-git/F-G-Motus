import { Injectable } from '@angular/core';
import { GetResult, Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  // --- METHODES SET ---
  async setObject(key: string, value: any){
    await Storage.set({ key: key, value: JSON.stringify(value) })
  }

  // --- METHODES GET ---
  async getObject(key: string): Promise<{ value: any }> {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }

  // --- METHODES TO CLEAR ---
  async clearStorage() {
    await Storage.clear();
  }




}
