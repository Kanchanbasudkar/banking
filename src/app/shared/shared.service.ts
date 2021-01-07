import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedservicesService {
  logout() {
    throw new Error('Method not implemented.');
  }

  constructor() {

  }
  private user = new BehaviorSubject<any>(null);
  getUser = this.user.asObservable();

  storeUser(newUser: any) {
    this.user.next(newUser);
  }
}
