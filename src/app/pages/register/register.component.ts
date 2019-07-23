import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Users } from 'src/app/interfaces/users.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: Users;

  constructor(private auth: AuthService) {
    this.user = {
      ID: new Date().getTime(),
      Nombre: '',
      Usuario: '',
      Contrasena: ''
    };
   }

  ngOnInit() {
  }

  registerUser( form: NgForm ) {
    this.auth.registerUser(this.user);
  }

}
