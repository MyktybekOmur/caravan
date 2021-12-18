import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Caravan';
  userData: any = [];
  user: any = [];

  constructor(private router: Router) {
    this.user = localStorage.getItem('userCaravan');
    this.userData = JSON.parse(this.user);
    if (!this.userData) this.router.navigate(['login']);
  }
}
