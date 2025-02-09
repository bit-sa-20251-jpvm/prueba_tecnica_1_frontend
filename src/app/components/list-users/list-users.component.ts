import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from '../search-user/search-user.component';

@Component({
  selector: 'app-list-users',
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {

  /**
   *
   */
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void{
    this.userService.listUsers().subscribe(
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
}
