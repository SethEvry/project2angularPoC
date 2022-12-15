import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onLogin: EventEmitter<Login> = new EventEmitter();
  email: string = '';
  password: string = '';

  constructor(){}

  ngOnInit(): void {}

  handleLogin(){
    if (!this.email){
      return;
    }
    
    const newLogin = {
      email: this.email,
      password: this.password
    }

    this.onLogin.emit(newLogin);

    this.email = '';
    this.password='';

  }
  

}
