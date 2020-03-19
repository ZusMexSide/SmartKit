import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { GuardiaGuard } from './guardia.guard';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'temperatura',
    loadChildren: () => import('./temperatura/temperatura.module').then(m => m.TemperaturaPageModule)
  },
  {
    path: 'aire',
    loadChildren: () => import('./aire/aire.module').then(m => m.AirePageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then(m => m.AlertPageModule)
  },
  { path: 'modal', component: ModalPageComponent },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'slideshow',
    loadChildren: () => import('./slideshow/slideshow.module').then( m => m.SlideshowPageModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then( m => m.RoomsPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'movimiento',
    loadChildren: () => import('./movimiento/movimiento.module').then( m => m.MovimientoPageModule)
  },
  { path: 'modal', component: ModalPageComponent }
];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
