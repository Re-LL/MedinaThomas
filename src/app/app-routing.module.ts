import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanActivateGuard} from './core/can-activate.guard';
import {SnackComponent} from './snack/snack.component';
import {MatSnackBar} from '@angular/material';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'dash',
    canActivate: [CanActivateGuard],
    data: { admin: true },
    loadChildren: () => import('./dash/dash.module').then(mod => mod.DashModule),
  },
  {
    path: '**',
    redirectTo: '/auth/signin',
    
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatSnackBar,
  ],
  exports: [RouterModule],

  entryComponents:[
    SnackComponent
  ]
  
})
export class AppRoutingModule { }
