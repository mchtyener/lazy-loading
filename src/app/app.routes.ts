import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },

    {
        path: 'auth',
        loadChildren: () => import('./components/auth/auth.routes').then(m => m.authRoutes)
    },

];
