import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '@features/home/home.module';
import { SearchModule } from '@features/search/search.module';
import { DetailModule } from '@features/detail/detail.module';
import { PageNotFoundComponent } from '@core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('@features/home/home.module').then((m): typeof HomeModule => m.HomeModule),
      },
      {
        path: 'search',
        loadChildren: () => import('@features/search/search.module').then((m): typeof SearchModule => m.SearchModule),
      },
      {
        path: 'detail',
        loadChildren: () => import('@features/detail/detail.module').then((m): typeof DetailModule => m.DetailModule),
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
