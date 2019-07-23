import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { BooksComponent } from './pages/books/books.component';
import { BookComponent } from './pages/books/book/book.component';
import { CreateComponent } from './pages/books/create/create.component';
import { UserbooksComponent } from './pages/user/userbooks/userbooks.component';
import { EditComponent } from './pages/books/book/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'user/:id', component: UserComponent,
    children: [
      { path: 'userbooks', component: UserbooksComponent }
    ]
  },
  { path: 'create', component: CreateComponent },
  {
    path: 'books', component: BooksComponent,
  },
  {
    path: 'book/:id', component: BookComponent,
  },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
