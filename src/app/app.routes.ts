import { Routes } from '@angular/router';
import { Employee } from './components/employee/employee';
import { Department } from './components/department/department';
import { User } from './components/user/user';
import { Home } from './components/home/home';
import { Page404 } from './page404/page404';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'employee', component: Employee },
    { path: 'department', component: Department },
    { path: 'user', component: User },
    { path: '**', component: Page404 }
];
