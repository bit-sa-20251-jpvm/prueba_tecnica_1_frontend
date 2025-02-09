import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-user',
  imports: [CommonModule,FormsModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  username: string = '';
  password: string = '';
  logged: boolean = false;
  constructor(private userService: UserService) { }

  login(): void {
    this.userService.loginUser({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        this.logged = true;
        console.log('Sesion iniciada');
        this.username = '';
        this.password = '';
      },
      error: (error) => {
        alert(error.error.msg)
      }
    }
    )
  }

  isLogged(): boolean{
    return this.logged;
  }
}
