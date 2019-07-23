import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { map } from 'rxjs/operators';
import { Books } from 'src/app/interfaces/books.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    return this.router.navigate(['/index']);
  }

  goNew() {
    return this.router.navigate(['create']);
  }

}
