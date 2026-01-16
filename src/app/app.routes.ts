import { Routes } from '@angular/router';
import { Employee } from './components/employee/employee';
import { Department } from './components/department/department';
import { User } from './components/user/user';
import { Home } from './components/home/home';
import { Page404 } from './components/page404/page404';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { UserList } from './components/user-list/user-list';
import { UserDetails } from './components/user-details/user-details';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'employee', component: Employee },
    { path: 'department', component: Department },
    { path: 'user', component: User },
    { path: 'user-list', component: UserList },
    { path: 'user-details/:id', component: UserDetails },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: '**', component: Page404 }
];
