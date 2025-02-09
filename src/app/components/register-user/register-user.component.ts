import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  imports: [FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  username : string = '';
  password : string = '';

  constructor(private userService: UserService){}

  register(): void{
    this.userService.createUser({username:this.username, password:this.password}).subscribe({
      next:(response) =>{
        alert('Usuario creado')
        this.username = '';
        this.password = '';
      },
      error:(error) =>{
        alert(error.error.msg)
      }
    }
    )
  }
}
