import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myimage:string ="assets/images/image1.jpg"
  myimg : string ="assets/images/image2.jpg"
  

  constructor() { }

  
  

  ngOnInit(): void {
  
  
  }
  
  
}
