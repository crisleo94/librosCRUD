import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/interfaces/books.interface';
import { BooksService } from 'src/app/services/books.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  book: Books;

  constructor(private bookService: BooksService, private router: Router) {
    this.book = {
      // ID: new Date().getTime(),
      Img: '',
      Title: '',
      Description: '',
      PublishDate: '',
      Excerpt: ''
    };
  }

  ngOnInit() {
  }

  editBook2( form: NgForm ) {
    this.bookService.updateBook(this.book.ID, this.book).subscribe(resp => {
      this.book = resp;
      localStorage.setItem('book', JSON.stringify(this.book));
    });
    this.router.navigateByUrl('/books');
  }

}
