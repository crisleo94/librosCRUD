import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Books } from '../interfaces/books.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  api = 'https://fakerestapi.azurewebsites.net/api/books/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.api);
  }

  getBook(id): Observable<Books> {
    return this.http.get<Books>(this.api + id);
  }

  createBook(book): Observable<Books> {
    return this.http.post<Books>(this.api, JSON.stringify(book), this.httpOptions);
  }

  updateBook(id, book): Observable<Books> {
    return this.http.put<Books>(this.api + id, JSON.stringify(book), this.httpOptions);
  }

  deleteBook(id) {
    return this.http.delete<Books>(this.api + id, this.httpOptions);
  }

  /*  getBooks2(): Observable<HttpResponse<Books[]>> {
     return this.http.get<Books[]>(
       this.api, { observe: 'response' });
   } */
}
