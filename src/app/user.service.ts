import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  constructor(private db: AngularFireDatabase) {}
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    });
  }
  get(uid: string): Observable<any> {
    return this.db.object('/users/' + uid).valueChanges();
  }
}
