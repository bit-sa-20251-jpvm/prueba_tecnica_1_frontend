import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-delete-user',
  imports: [],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {

  username : string = '';

  constructor(private userService: UserService){}
    
      delete(): void{
        console.log(this.username);
        
        this.userService.deleteUser(this.username).subscribe({
          next:(response) =>{
            console.log(response);
            this.username = '';
          },
          error:(error) =>{
            alert(error.error.msg)
          }
        }
        )
      }
}
