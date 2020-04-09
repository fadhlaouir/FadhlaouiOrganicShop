import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent {
  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((x) => console.log(x));
  }
  logout() {
    this.afAuth.signOut();
  }
}
