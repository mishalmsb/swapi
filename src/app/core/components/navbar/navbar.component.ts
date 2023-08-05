import { Component } from '@angular/core';
import { IBaseSearchFilters } from '@core/models/filters';
import { SearchFiltersService } from '@core/services/search/search-filters.service';
import { Observable } from 'rxjs';

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

  search(query: string): void {
    this._searchFiltersService.onQueryChange(query);
  }
}
