import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';
  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(): void {
    this.loginValid = true;
  }
}
