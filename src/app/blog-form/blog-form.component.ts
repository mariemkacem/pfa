import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  blogForm = new FormGroup({
    blogTitle: new FormControl(''),
    blogDescription: new FormControl(''),
    blogPicture: new FormControl(''),
    publishTime: new FormControl('')})

  ngOnInit(): void {
    
  }


  constructor() { }

  

}
