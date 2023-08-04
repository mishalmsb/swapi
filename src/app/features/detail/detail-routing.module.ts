import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail.component';
import { ContentType } from '@core/enums/type';

const routes: Routes = Object.values(ContentType).map((type) => ({
  path: `${type}/:id`,
  component: DetailComponent,
  data: {
    contentType: type,
  },
}));

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRoutingModule {}
