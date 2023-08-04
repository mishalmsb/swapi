import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchNavigationButtonsComponent } from './components/search-navigation-buttons/search-navigation-buttons.component';
import { LoadingComponent } from './components/loading/loading.component';
import { IconByTypeComponent } from './components/icon-by-type/icon-by-type.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    SearchNavigationButtonsComponent,
    LoadingComponent,
    IconByTypeComponent,
    FavouriteComponent,
    CapitalizePipe,
    ErrorMessageComponent,
  ],
  imports: [CommonModule, RouterModule, NgbTooltipModule],
  exports: [SearchNavigationButtonsComponent, LoadingComponent, IconByTypeComponent, FavouriteComponent, ErrorMessageComponent],
  providers: [],
})
export class SharedModule {}
