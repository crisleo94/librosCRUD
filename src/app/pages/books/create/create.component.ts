import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/interfaces/books.interface';
import { BooksService } from 'src/app/services/books.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  book: Books;

  constructor(private bookService: BooksService, private rouuter: Router) {
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

  createBook(form: NgForm) {
    if (form.invalid) { return; }
    this.bookService.createBook(this.book).subscribe( resp => {
      this.book = resp;
      localStorage.setItem('book', JSON.stringify(resp));
      console.log(resp);
      this.rouuter.navigateByUrl('/books');
    });
  }

}
