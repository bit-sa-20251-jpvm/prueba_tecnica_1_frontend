import { Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

export const routes: Routes = [{
    title:'Lista de usuarios',
    path: 'list-users',
    component: ListUsersComponent
},{
    title:'Registro',
    path: 'register',
    component: RegisterUserComponent
}];
