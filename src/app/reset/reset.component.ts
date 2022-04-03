import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  loginValid : boolean =true;
  public email = '';
  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(): void {
    this.loginValid = true;
  }
}
