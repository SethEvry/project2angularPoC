import { Component } from '@angular/core';
import { Login } from './models/Login';
import { User } from './models/User';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  jwt: string = '';
  users: User[]=[];

  constructor(private loginService: LoginService, private userService: UserService) {}

  login(login: Login) {
    this.loginService.login(login).subscribe((jwt) => {
      this.jwt = `Bearer ${jwt.token}`;
      this.getUsers();
    });
  }

  getUsers(){
    this.userService.getUsers(this.jwt).subscribe(users => this.users=users);
  }
}
