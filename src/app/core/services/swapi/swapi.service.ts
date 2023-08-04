import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentType } from '@core/enums/type';
import { ISearchFilters } from '@core/models/filters';
import { IPaginatedResponse } from '@core/models/pagination';
import { SwapiContentType } from '@core/models/swapi';
import { environment } from '@env';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private _http: HttpClient) {}

  search({ page, query, contentType }: ISearchFilters): Observable<IPaginatedResponse<SwapiContentType>> {
    return this._http
      .get<IPaginatedResponse<SwapiContentType>>(`${environment.swapiBaseUrl}${contentType}/?page=${page}&search=${query}`)
      .pipe(catchError(this.handleError));
  }

  getById(id: number, contentType: ContentType): Observable<SwapiContentType> {
    return this._http.get<SwapiContentType>(`${environment.swapiBaseUrl}${contentType}/${id}`).pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }

  // TODO: decide if this is a better approach
  // searchPeople = (filters: BaseSearchFilters) => this.search<IPeople>(filters, ContentType.PEOPLE);
  // searchFilms = (filters: BaseSearchFilters) => this.search<IFilm>(filters, ContentType.FILMS);
  // searchPlanets = (filters: BaseSearchFilters) => this.search<IPlanet>(filters, ContentType.PLANETS);
  // searchSpecies = (filters: BaseSearchFilters) => this.search<ISpecies>(filters, ContentType.SPECIES);
  // searchStarships = (filters: BaseSearchFilters) => this.search<IStarship>(filters, ContentType.STARSHIPS);
  // searchVehicles = (filters: BaseSearchFilters) => this.search<IVehicle>(filters, ContentType.VEHICLES);

  // getPeople = (id: number) => this.getById<IPeople>(id, ContentType.PEOPLE);
  // getFilms = (id: number) => this.getById<IFilm>(id, ContentType.FILMS);
  // getPlanets = (id: number) => this.getById<IPlanet>(id, ContentType.PLANETS);
  // getSpecies = (id: number) => this.getById<ISpecies>(id, ContentType.SPECIES);
  // getStarships = (id: number) => this.getById<IStarship>(id, ContentType.STARSHIPS);
  // getVehicles = (id: number) => this.getById<IVehicle>(id, ContentType.VEHICLES);
}
