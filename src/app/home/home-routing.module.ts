import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'top-rated',
        loadChildren: () => import('./top-rated/top-rated.module').then( m => m.TopRatedPageModule)
      },
      {
        path: 'latest',
        loadChildren: () => import('./latest/latest.module').then( m => m.LatestPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
