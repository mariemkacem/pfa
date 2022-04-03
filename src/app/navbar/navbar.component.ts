import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
 
  NavbarShow : boolean=true ;
  constructor() { }

  ngOnInit(): void {
  }

  navSow() {
    this.NavbarShow=!this.NavbarShow
  }
  closeNavbar(){
    this.NavbarShow=!this.NavbarShow
  }
}

 
