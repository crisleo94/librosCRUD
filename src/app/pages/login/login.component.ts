import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users.interface';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Users;
  prueba: NgForm;

  constructor(private auth: AuthService) {
    this.user = {
      Usuario: '',
      Contrasena: ''
    };
  }

  ngOnInit() {
  }

  loginUser( form: NgForm ) {
    if (form.invalid) { return; }
    this.auth.loginUser(this.user);
  }
}
