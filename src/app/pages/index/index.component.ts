import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  user: Users;

  constructor(private auth: AuthService) {
   }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    // this.auth.loginUser(this.user);
  }

}
