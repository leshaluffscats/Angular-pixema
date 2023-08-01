import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string): any {
    if (key in localStorage) {
      return JSON.parse(String(localStorage.getItem(key)))
    } else return
  }
}
