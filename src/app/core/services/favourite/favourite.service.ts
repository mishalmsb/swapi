import { Injectable, inject } from '@angular/core';
import { ContentType } from '@core/enums/type';
import { IFavourite } from '@core/models/favourite';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private _favourites$ = new BehaviorSubject<IFavourite[] | null>(null);
  private _localStorageService: LocalStorageService = inject(LocalStorageService);

  sessionStorageName = 'swapi-favourites';

  constructor() {}

  private loadFavourites(): void {
    const favouritesFromStorage = this._localStorageService.get<IFavourite[]>(this.sessionStorageName);
    if (!favouritesFromStorage) {
      this.updateFavourites([]);
      return;
    }
    this._favourites$.next(favouritesFromStorage);
  }

  getFavourites(): Observable<IFavourite[] | null> {
    if (!this._favourites$.value) {
      this.loadFavourites();
    }
    return this._favourites$.asObservable();
  }

  addToFavourites(id: number, type: ContentType) {
    if (!this._favourites$.value) {
      return;
    }
    const favourites = [
      ...this._favourites$.value,
      {
        type,
        id,
      },
    ];
    this.updateFavourites(favourites);
  }

  removeFromFavourites(id: number, type: ContentType) {
    if (!this._favourites$.value) {
      return;
    }
    const favourites = this._favourites$.value.filter((value) => value.id !== id && value.type === type);
    this.updateFavourites(favourites);
  }

  updateFavourites(favourites: IFavourite[]) {
    console.log(favourites);
    this._localStorageService.set(this.sessionStorageName, favourites);
    this._favourites$.next(favourites);
  }

  isSwapiContentInFavourite(id: number, contentType: ContentType) {
    if (this._favourites$.value) {
      return this._favourites$.value.some((value) => value.id === id && value.type === contentType);
    }
    return false;
  }
}
