import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userList: Users[] = [];

  constructor(private router: Router) { }


  loginUser(user: Users) {
    const userLocal = JSON.parse(localStorage.getItem('user'));
    const nombre = userLocal.Nombre;
    const userpass = userLocal.Contrasena;
    const username = userLocal.Usuario;
    if (username === user.Usuario && userpass === user.Contrasena) {
      this.router.navigateByUrl('/index');
    }
    return user;
  }

  registerUser(user: Users) {
    localStorage.setItem('user', JSON.stringify(user));
    const data = JSON.parse(localStorage.getItem('user'));
    this.userList.push(data);
    const username = data.Usuario;
    if (user.Contrasena !== '' && user.Usuario !== '' && user.Nombre !== '') {
      alert(`Su cuenta se ha registrado con éxito, su nombre de usuario es ${user.Usuario}, por favor inicie sesión.`);
      this.router.navigateByUrl('/login');
    } else {
      console.log('Nombre de usuario registrado');
    }
  }



}
