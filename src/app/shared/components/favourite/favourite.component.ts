import { Component, Input, inject } from '@angular/core';
import { ContentType } from '@core/enums/type';
import { IFavourite } from '@core/models/favourite';
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
  @Input() name: string;
  private _favouriteService: FavouriteService = inject(FavouriteService);
  favourites$: Observable<IFavourite[] | null> = this._favouriteService.getFavourites();
  _isFavourite: boolean;

  get isFavourite(): boolean {
    return this._favouriteService.isSwapiContentInFavourite(this.dataId, this.contentType);
  }

  toogleFavourite(): void {
    const fav: IFavourite = {
      id: this.dataId,
      type: this.contentType,
      name: this.name,
    };
    this.isFavourite ? this._favouriteService.removeFromFavourites(fav) : this._favouriteService.addToFavourites(fav);
  }
}
