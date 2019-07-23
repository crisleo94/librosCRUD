import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { BooksComponent } from './pages/books/books.component';
import { BookComponent } from './pages/books/book/book.component';
import { EditComponent } from './pages/books/book/edit/edit.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './pages/books/create/create.component';
import { UserbooksComponent } from './pages/user/userbooks/userbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BooksComponent,
    BookComponent,
    EditComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent,
    UserbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
