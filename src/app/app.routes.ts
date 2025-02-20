import { Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';

export const routes: Routes = [{
    title:'Lista de usuarios',
    path: 'userlist',
    component: ListUsersComponent
},{
    title:'Registro',
    path: 'register', //ruta de registrar usuario
    component: RegisterUserComponent
},{
    title:'Busqueda',
    path: 'search', //ruta de la ventana de buscar usuarios
    component: SearchUserComponent
},
{
    title:'Inicio de sesion',
    path: 'login',
    component: LoginUserComponent
}
];
