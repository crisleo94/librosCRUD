import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/interfaces/books.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: Books[];

  constructor(private book: BooksService) { }

  ngOnInit() {
    this.showBooksResponse();
  }

  showBooksResponse() {
    this.book.getBooks()
      .subscribe(data => {
        this.books = data;
        console.log(data);
      });
  }

  /* showBooksResponse() {
   this.book.getBooks2().subscribe(resp => {
     const keys = resp.headers.keys();
     this.headers = keys.map(key => `${key}: ${resp.headers.keys()}`);

     this.iBooks = [];

     keys.forEach(b => {
       this.iBooks.push(b);
     });

     this.books = { ...resp.body }
     // JSON.stringify(this.books);
     // console.log(this.books);
     console.log(this.iBooks);
   });
  } */

}
