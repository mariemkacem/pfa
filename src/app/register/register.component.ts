import { Component, OnInit } from '@angular/core';
interface User {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public loginValid = true;
  public firstname = '';
  public lastname = '';
  public email = '';
  public birthday = '';
  public telnumber = '';
  public password = '';
  public occupation ='';
  public role ='';
  public type='';
  
  users: User[] = [
    {value: 'visitor', viewValue: 'Visitor'},
    {value: 'productowner', viewValue: 'ProductOwner'},
    {value: 'sponsor', viewValue: 'Sponsor'},
  ];
  
    
    selected :String ="";
    
    constructor() { }
    VisitorShow : boolean=false ;
    ProductOwnerShow : boolean=false ;
    SponsorShow : boolean=false ;
  ngOnInit(): void {
    
  }
  toggle(show : boolean) : void {
    show =! show;
  }
  UserSelect()
 {
  if (this.selected=="Visitor" ){
    this.ProductOwnerShow=false ;
    this.SponsorShow=false ;
    this.VisitorShow=true;
  } else if (this.selected=="Product Owner" ){
    this.VisitorShow=false;
    this.SponsorShow = false ;
    this.ProductOwnerShow=!this.ProductOwnerShow

  }else if (this.selected=="Sponsor" ){
    this.VisitorShow=false ;
    this.ProductOwnerShow=false ;
    this.SponsorShow=!this.SponsorShow

  }else {
    this.VisitorShow=false ;
    this.ProductOwnerShow=false ;
    this.SponsorShow = false ;
  }
 
  
 }
 public onSubmit(): void {
  this.loginValid = true;
}
}
