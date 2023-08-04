import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentType } from '@core/enums/type';
import { IBaseSearchFilters } from '@core/models/filters';
import { SearchFiltersService } from '@core/services/search/search-filters.service';
import { UtilService } from '@core/services/util/util.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-navigation-buttons',
  templateUrl: './search-navigation-buttons.component.html',
  styleUrls: ['./search-navigation-buttons.component.scss'],
})
export class SearchNavigationButtonsComponent {
  activeContentType: ContentType;
  contentTypes = ContentType;
  filters$: Observable<IBaseSearchFilters>;

  constructor(
    private _searchFiltersService: SearchFiltersService,
    private _route: ActivatedRoute,
    private _utilService: UtilService
  ) {
    this.filters$ = this._searchFiltersService.getFilters();
    this.activeContentType = this._utilService.getContentTypeFromActiveRouteData(this._route.snapshot.data);
  }
}
