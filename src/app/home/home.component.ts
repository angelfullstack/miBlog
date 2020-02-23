import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalPosts: number;
  nombreSeccion: string;
  constructor() {
    this.totalPosts = 3;
    this.nombreSeccion = 'Últimos posts';
  }

  ngOnInit() {
  }

}
