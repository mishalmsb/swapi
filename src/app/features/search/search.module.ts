import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '@shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchService } from './services/search/search.service';

import { SearchComponent } from './components/search.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { SearchUtilService } from './services/search-util/search-util.service';
import { SearchNotResultsComponent } from './components/search-not-results/search-not-results.component';

@NgModule({
  declarations: [SearchComponent, SearchCardComponent, SearchNotResultsComponent],
  imports: [SearchRoutingModule, CommonModule, SharedModule, NgbPaginationModule],
  providers: [SearchService, SearchUtilService],
})
export class SearchModule {}
