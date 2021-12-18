import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  regLogin = true;
  form: any = {
    email: null,
    password: null,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { username, password } = this.form;
    console.log(this.form);
    localStorage.setItem('userCaravan', JSON.stringify(this.form));
    this.router.navigate(['/home']);
  }
  change() {
    this.regLogin = !this.regLogin;
  }
}
