import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';
import { IBaseSearchFilters, BaseSearchFilters } from '@core/models/filters';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchFiltersService {
  private _filters$ = new BehaviorSubject<IBaseSearchFilters>(new BaseSearchFilters());

  constructor(private _router: Router) {}

  setFiltersFromParams(queryParams: Params): void {
    const filtersParams = queryParams['filters'];
    if (filtersParams) {
      this.setFilters(JSON.parse(filtersParams));
    }
  }

  setFilters(filters: IBaseSearchFilters): void {
    this._filters$.next(filters);
  }

  getFilters(): Observable<IBaseSearchFilters> {
    return this._filters$.asObservable();
  }

  onQueryChange(query: string): void {
    this.goToSearch({
      ...this._filters$.value,
      query,
    });
  }

  goToPage(page: number): void {
    this.goToSearch({
      ...this._filters$.value,
      page,
    });
  }

  private goToSearch(filters: IBaseSearchFilters): void {
    this._router.navigate(['/search'], { queryParams: { filters: JSON.stringify(filters) } });
  }
}
