import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-users',
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{

  /**
   *
   */
  users : any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.userService.listUsers().subscribe(
        (response)=>{
        this.users = response.users;      })
  }
}
