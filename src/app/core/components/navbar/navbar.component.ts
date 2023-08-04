import { Component, OnDestroy } from '@angular/core';
import { IBaseSearchFilters } from '@core/models/filters';
import { SearchFiltersService } from '@core/services/search/search-filters.service';
import { Observable, Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  filters$: Observable<IBaseSearchFilters>;

  constructor(private _searchFiltersService: SearchFiltersService) {
    this.filters$ = this._searchFiltersService.getFilters();
  }

  search(query: string) {
    this._searchFiltersService.onQueryChange(query);
  }
}
