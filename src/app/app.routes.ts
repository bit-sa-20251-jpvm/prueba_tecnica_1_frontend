import { Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { SearchUserComponent } from './components/search-user/search-user.component';

export const routes: Routes = [{
    title:'Lista de usuarios',
    path: 'userlist',
    component: ListUsersComponent
},{
    title:'Registro',
    path: 'register',
    component: RegisterUserComponent
},{
    title:'Busqueda',
    path: 'search',
    component: SearchUserComponent
}];
