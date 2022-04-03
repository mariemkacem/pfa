import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(): void {
    this.loginValid = true;
  }
}
