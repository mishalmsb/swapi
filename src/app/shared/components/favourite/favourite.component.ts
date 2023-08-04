import { Component, Input, inject } from '@angular/core';
import { ContentType } from '@core/enums/type';
import { IFavourite } from '@core/models/favourite';
import { SwapiContentType } from '@core/models/swapi';
import { FavouriteService } from '@core/services/favourite/favourite.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent {
  @Input() dataId: number;
  @Input() contentType: ContentType;
  private _favouriteService: FavouriteService = inject(FavouriteService);
  favourites$: Observable<IFavourite[] | null> = this._favouriteService.getFavourites();
  _isFavourite: boolean;

  get isFavourite() {
    this._isFavourite = this._favouriteService.isSwapiContentInFavourite(this.dataId, this.contentType);
    return this._isFavourite;
  }

  toogleFavourite() {
    if (this._isFavourite) {
      this._favouriteService.removeFromFavourites(this.dataId, this.contentType);
    }
    this._favouriteService.addToFavourites(this.dataId, this.contentType);
  }
}
