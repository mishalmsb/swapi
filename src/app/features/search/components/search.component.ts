import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentType } from '@core/enums/type';
import { SearchFiltersService } from '@core/services/search/search-filters.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SearchService } from '../services/search/search.service';
import { SwapiContentType } from '@core/models/swapi';
import { IPaginatedResponse } from '@core/models/pagination';
import { IBaseSearchFilters } from '@core/models/filters';
import { UtilService } from '@core/services/util/util.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  activeContent: ContentType;

  filters$: Observable<IBaseSearchFilters>;
  data$: Observable<IPaginatedResponse<SwapiContentType> | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  destroyed$ = new Subject<boolean>();

  constructor(
    private _route: ActivatedRoute,
    private _searchFiltersService: SearchFiltersService,
    private _searchService: SearchService,
    private _utilService: UtilService
  ) {
    this.data$ = this._searchService.getData();
    this.filters$ = this._searchFiltersService.getFilters();
    this.loading$ = this._searchService.getLoading();
    this.error$ = this._searchService.getError();
    this.activeContent = this._utilService.getContentTypeFromActiveRouteData(this._route.snapshot.data);
    this._route.queryParams.subscribe((queryParams) => this._searchFiltersService.setFiltersFromParams(queryParams));
  }

  ngOnInit(): void {
    this.filters$.pipe(takeUntil(this.destroyed$)).subscribe((filters) => {
      this._searchService.search({
        ...filters,
        contentType: this.activeContent,
      });
    });
  }

  pageChange(page: number): void {
    this._searchFiltersService.goToPage(page);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
