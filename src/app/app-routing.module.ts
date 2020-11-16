import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    canActivate:[LoginGuard],
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'filtro/:id',
    canActivate:[LoginGuard],
    loadChildren: () => import('./pages/filtrosint/filtrosint.module').then(m => m.FiltrosintPageModule)
  },
  {
    path: 'uno',
    canActivate:[LoginGuard],
    loadChildren: () => import('./pages/zona-uno/zona-uno.module').then(m => m.ZonaUnoPageModule)
  }, 
  {
    path: 'dos',
    canActivate:[LoginGuard],
    loadChildren: () => import('./pages/zona-dos/zona-dos.module').then(m => m.ZonaDosPageModule)
  }, 
  {
    path: 'tres',
    canActivate:[LoginGuard],
    loadChildren: () => import('./pages/zona-tres/zona-tres.module').then(m => m.ZonaTresPageModule)
  }, 
  {
    path: 'vertedero',
    canActivate:[LoginGuard],
    loadChildren: () => import('./pages/vertedero/vertedero.module').then(m => m.VertederoPageModule)
  },
  {
    path: 'tanques',
    canActivate:[LoginGuard],
    loadChildren: () => import('./pages/tanques/tanques.module').then(m => m.TanquesPageModule)
  },
  {
    path: 'apoyo',
    canActivate:[LoginGuard],
    loadChildren: () => import('./pages/tanquext/tanquext.module').then(m => m.TanquextPageModule)
  }, 
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    canActivate:[LoginGuard],
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
