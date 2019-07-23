import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Books } from 'src/app/interfaces/books.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Books;

  constructor(private router: Router,
              private actRoute: ActivatedRoute,
              private bookService: BooksService) {

      this.actRoute.params.subscribe( params => {
      this.bookService.getBook(params.id).subscribe( data => {
        this.book = data;
        console.log(this.book);
        });
      });
   }

  ngOnInit() {
  }

  goHome() {
    return this.router.navigate(['/index']);
  }

  onDelete(id) {
    this.bookService.deleteBook(id).subscribe(resp => {
      console.log('Libro Borrado', resp);
    });
  }

}
