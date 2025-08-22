import { Routes } from '@angular/router';

export const routes: Routes = [
// rota pra home
{
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
},
{
    path: 'lista',
    loadComponent: () => import('./pages/lista/lista.component').then(m => m.ListaComponent)
}
    

];
