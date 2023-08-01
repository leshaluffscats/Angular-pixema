import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  setItem(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string): any{
    return JSON.stringify(localStorage.getItem(key))
  }
}
