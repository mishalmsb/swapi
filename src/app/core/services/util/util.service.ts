import { Injectable } from '@angular/core';
import { ContentType } from '@core/enums/type';
import { environment } from '@env';
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
