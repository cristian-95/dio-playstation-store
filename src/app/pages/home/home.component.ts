import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/data/db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gameList:any[] =[]

  constructor() { }


  ngOnInit(): void {
    this.gameList = games;
    console.log("onInit:::::: ",this.gameList.length)
   }

}
