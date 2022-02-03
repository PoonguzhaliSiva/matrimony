import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  profile: any;

  constructor() { }

  private data = new BehaviorSubject({});
  profiledata = this.data.asObservable();

  checkSpinner(i: any) {
    this.data.next(i);
  }

  private count = new BehaviorSubject({});
  countList = this.data.asObservable();

  checkCountList(e: any) {
    this.data.next(e);
  }
}
