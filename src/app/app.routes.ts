import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'calendar',
        pathMatch: 'full',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
