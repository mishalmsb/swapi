import { Injectable } from '@angular/core';
import { ContentType } from '@core/enums/type';
import { IFilm } from '@core/models/film';
import { IPeople } from '@core/models/people';
import { IPlanet } from '@core/models/planet';
import { SwapiContentType } from '@core/models/swapi';
import { ISpecies } from '@core/models/species';
import { IStarship } from '@core/models/starship';
import { IVehicle } from '@core/models/vehicle';
import { ISearchCard, ISearchCardSpecs } from '@features/search/models/card';

@Injectable()
export class SearchUtilService {
  constructor() {}

  mapSwapiContentTypeToCardContent(data: SwapiContentType, contentType: ContentType): ISearchCard {
    switch (contentType) {
      case ContentType.FILMS:
        return this.mapFilmsToCardContent(data as IFilm);
      case ContentType.PEOPLE:
        return this.mapPeopleToCardContent(data as IPeople);
      case ContentType.PLANETS:
        return this.mapPlanetsToCardContent(data as IPlanet);
      case ContentType.SPECIES:
        return this.mapSpeciesToCardContent(data as ISpecies);
      case ContentType.STARSHIPS:
        return this.mapStarshipsToCardContent(data as IStarship);
      case ContentType.VEHICLES:
        return this.mapVehiclesToCardContent(data as IVehicle);
    }
  }

  getTypeByDataKey<T>(key: keyof T): ContentType | null {
    switch (key) {
      case 'films':
        return ContentType.FILMS;
      case 'characters' || 'residents' || 'people' || 'pilots':
        return ContentType.PEOPLE;
      case 'planets':
        return ContentType.PLANETS;
      case 'species':
        return ContentType.SPECIES;
      case 'starships':
        return ContentType.STARSHIPS;
      case 'vehicles':
        return ContentType.VEHICLES;
      default:
        return null;
    }
  }

  mapDataTpCardSpecs<T>(data: T, keys: Array<keyof T>) {
    return Object.keys(data as object).reduce<ISearchCardSpecs[]>((acc, key) => {
      if (!keys.includes(key as keyof T)) {
        return acc;
      }

      const type = this.getTypeByDataKey(key);
      const list: string[] = data[key as keyof T] as string[];

      if (type && list.length) {
        acc.push({
          type,
          displayText: key,
          count: list.length,
        });
      }
      return acc;
    }, []);
  }

  mapFilmsToCardContent(data: IFilm): ISearchCard {
    return {
      name: data.title,
      url: data.url,
      specs: this.mapDataTpCardSpecs<IFilm>(data, ['species', 'starships', 'vehicles', 'characters', 'planets']),
    };
  }

  mapPeopleToCardContent(data: IPeople): ISearchCard {
    return {
      name: data.name,
      url: data.url,
      specs: this.mapDataTpCardSpecs<IPeople>(data, ['species', 'starships', 'vehicles', 'films']),
    };
  }

  mapPlanetsToCardContent(data: IPlanet): ISearchCard {
    return {
      name: data.name,
      url: data.url,
      specs: this.mapDataTpCardSpecs<IPlanet>(data, ['films', 'residents']),
    };
  }

  mapSpeciesToCardContent(data: ISpecies): ISearchCard {
    return {
      name: data.name,
      url: data.url,
      specs: this.mapDataTpCardSpecs<ISpecies>(data, ['films', 'people']),
    };
  }

  mapStarshipsToCardContent(data: IStarship): ISearchCard {
    return {
      name: data.name,
      url: data.url,
      specs: this.mapDataTpCardSpecs<IStarship>(data, ['films', 'pilots']),
    };
  }

  mapVehiclesToCardContent(data: IVehicle): ISearchCard {
    return {
      name: data.name,
      url: data.url,
      specs: this.mapDataTpCardSpecs<IVehicle>(data, ['films', 'pilots']),
    };
  }
}
