import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopRatedPage } from './top-rated.page';

const routes: Routes = [
  {
    path: '',
    component: TopRatedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopRatedPageRoutingModule {}
