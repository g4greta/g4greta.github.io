import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/frontend/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'news-page/:id',
    loadChildren: () => import('./pages/frontend/news-page/news-page.module').then( m => m.NewsPagePageModule)
  },
  {
    path: 'add-news/:id',
    loadChildren: () => import('./pages/backoffice/add-news/add-news.module').then( m => m.AddNewsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-material/:id',
    loadChildren: () => import('./pages/backoffice/add-material/add-material.module').then( m => m.AddMaterialPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'materials',
    loadChildren: () => import('./pages/backoffice/materials/materials.module').then( m => m.MaterialsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/backoffice/news/news.module').then( m => m.NewsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/backoffice/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/backoffice/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'news-blog',
    loadChildren: () => import('./pages/frontend/news/news.module').then( m => m.NewsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules ,anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled', useHash: false,})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
