import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users.interface';
import { Books } from 'src/app/interfaces/books.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  libros: Books;
  user: Users;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit() {
  }

  getLibros() {
    this.libros = JSON.parse(localStorage.getItem('book'));
  }

}
