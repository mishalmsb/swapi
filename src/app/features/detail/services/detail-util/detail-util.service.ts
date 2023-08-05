import { Injectable } from '@angular/core';
import { ContentType } from '@core/enums/type';
import { IFilm } from '@core/models/film';
import { IPeople } from '@core/models/people';
import { IPlanet } from '@core/models/planet';
import { SwapiContentType } from '@core/models/swapi';
import { ISpecies } from '@core/models/species';
import { IStarship } from '@core/models/starship';
import { IVehicle } from '@core/models/vehicle';
import { ISwapiDetail } from '@features/detail/models/detail';

@Injectable()
export class DetailUtilService {
  mapSwapiContentTypeToDetail(data: SwapiContentType, contentType: ContentType): ISwapiDetail {
    switch (contentType) {
      case ContentType.FILMS:
        return this.mapFilmsToDetail(data as IFilm);
      case ContentType.PEOPLE:
        return this.mapPeopleToDetail(data as IPeople);
      case ContentType.PLANETS:
        return this.mapPlanetsToDetail(data as IPlanet);
      case ContentType.SPECIES:
        return this.mapSpeciesToDetail(data as ISpecies);
      case ContentType.STARSHIPS:
        return this.mapStarshipsToDetail(data as IStarship);
      case ContentType.VEHICLES:
        return this.mapVehiclesToDetail(data as IVehicle);
    }
  }

  mapFilmsToDetail(data: IFilm): ISwapiDetail {
    return {
      name: data.title,
      url: data.url,
    };
  }

  mapPeopleToDetail(data: IPeople): ISwapiDetail {
    return {
      name: data.name,
      url: data.url,
    };
  }

  mapPlanetsToDetail(data: IPlanet): ISwapiDetail {
    return {
      name: data.name,
      url: data.url,
    };
  }

  mapSpeciesToDetail(data: ISpecies): ISwapiDetail {
    return {
      name: data.name,
      url: data.url,
    };
  }

  mapStarshipsToDetail(data: IStarship): ISwapiDetail {
    return {
      name: data.name,
      url: data.url,
    };
  }

  mapVehiclesToDetail(data: IVehicle): ISwapiDetail {
    return {
      name: data.name,
      url: data.url,
    };
  }
}
