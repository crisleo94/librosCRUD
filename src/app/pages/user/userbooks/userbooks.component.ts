import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/interfaces/books.interface';

@Component({
  selector: 'app-userbooks',
  templateUrl: './userbooks.component.html',
  styleUrls: ['./userbooks.component.css']
})
export class UserbooksComponent implements OnInit {

  book: Books;

  constructor() { }

  ngOnInit() {
    this.book = JSON.parse(localStorage.getItem('book'));
  }

}
