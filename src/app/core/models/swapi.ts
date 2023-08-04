import { IPeople } from '@core/models/people';
import { IFilm } from './film';
import { IPlanet } from './planet';
import { ISpecies } from './species';
import { IStarship } from './starship';
import { IVehicle } from './vehicle';

export type SwapiContentType = IPeople | IFilm | IPlanet | ISpecies | IStarship | IVehicle;
