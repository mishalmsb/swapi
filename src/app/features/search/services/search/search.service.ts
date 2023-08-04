import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchFilters } from '@core/models/filters';
import { IPaginatedResponse } from '@core/models/pagination';
import { SwapiContentType } from '@core/models/swapi';
import { SwapiService } from '@core/services/swapi';
import { BehaviorSubject, Observable, Subject, Subscription, catchError, debounceTime } from 'rxjs';

@Injectable()
export class SearchService {
  private _data$ = new BehaviorSubject<IPaginatedResponse<SwapiContentType> | null>(null);
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _error$ = new Subject<string | null>();

  constructor(private _swapiService: SwapiService) {
    this._loading$.next(true);
  }

  getError(): Observable<string | null> {
    return this._error$.asObservable();
  }

  getLoading(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  getData(): Observable<IPaginatedResponse<SwapiContentType> | null> {
    return this._data$.asObservable();
  }

  search(filters: ISearchFilters) {
    this._loading$.next(true);
    this._data$.next(null);
    this._error$.next(null);
    this._swapiService.search(filters).subscribe({
      next: (data) => {
        this._data$.next(data);
        this._loading$.next(false);
      },
      error: (e) => {
        this._error$.next(e);
        this._loading$.next(false);
      },
    });
  }
}
