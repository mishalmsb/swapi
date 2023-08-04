import { Injectable } from '@angular/core';
import { ContentType } from '@core/enums/type';
import { IFilm } from '@core/models/film';
import { IPeople } from '@core/models/people';
import { IPlanet } from '@core/models/planet';
import { SwapiContentType } from '@core/models/swapi';
import { ISpecies } from '@core/models/species';
import { IStarship } from '@core/models/starship';
import { IVehicle } from '@core/models/vehicle';
import { environment } from '@env';
import { ISearchCard } from '@features/search/models/card';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  getIdFromSwapiUrl(url: string, contentType: ContentType): number {
    return Number(url.replace(`${environment.swapiBaseUrl}${contentType}/`, '').replace('/', ''));
  }

  getContentTypeFromActiveRouteData(data: Data): ContentType {
    return data['contentType'];
  }

  getIconByType(contentType: ContentType): string {
    switch (contentType) {
      case ContentType.FILMS:
        return 'fa-solid fa-video';
      case ContentType.PEOPLE:
        return 'fa-solid fa-user-secret';
      case ContentType.PLANETS:
        return 'fa-solid fa-globe';
      case ContentType.SPECIES:
        return 'fa-brands fa-optin-monster';
      case ContentType.STARSHIPS:
        return 'fa-brands fa-space-awesome';
      case ContentType.VEHICLES:
        return 'fa-solid fa-car';
    }
  }
}
