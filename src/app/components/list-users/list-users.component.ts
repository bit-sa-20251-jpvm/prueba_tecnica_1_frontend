import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-users',
  imports: [CommonModule,FormsModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {

  /**
   *
   */
  users: any[] = [];
  currentUser: any = {username:'',password:'',updatedPassword:''};
  editing: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void{

    this.userService.readUsers().subscribe(
      
      (response) => {
        this.users = response.users;
      })
  }

  delete(username : string): void {
    console.log(username);

    if (confirm(`Eliminar a ${username} ?`)) {
      this.userService.deleteUser(username).subscribe({
        next: (response) => {
          console.log(response);
          this.loadUsers();
        },
        error: (error) => {
          alert(error.error.msg)
        }
      }
      )
    }
  }

  update() : void {
    console.log(this.currentUser);
    this.userService.updateUser(this.currentUser).subscribe({
      next: (response) =>{
        console.log(response);
        this.editing = false;
        this.loadUsers();
      },
      error: (error) => {
        alert(error.error.msg);
      }
    })
  }
}
