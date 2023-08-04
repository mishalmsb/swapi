import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search.component';
import { ContentType } from '@core/enums/type';

const contentRoutes: Routes = Object.values(ContentType).map((type) => ({
  path: type,
  component: SearchComponent,
  data: {
    contentType: type,
  },
}));

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: ContentType.FILMS,
        pathMatch: 'full',
      },
      ...contentRoutes,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
