import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentType } from '@core/enums/type';
import { SwapiContentType } from '@core/models/swapi';
import { UnsplashService } from '@core/services/unsplash/unsplash.service';
import { ISearchCard } from '@features/search/models/card';
import { SearchUtilService } from '@features/search/services/search-util/search-util.service';
import { UtilService } from '@core/services/util/util.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent implements OnInit {
  contentType: ContentType;
  contentTypes = ContentType;
  cardContent: ISearchCard;
  dataId: number;
  image$: Observable<string>;
  @Input() data: SwapiContentType;

  constructor(
    private _route: ActivatedRoute,
    private _searchUtilService: SearchUtilService,
    private _unsplashService: UnsplashService,
    private _utilsService: UtilService
  ) {}

  ngOnInit(): void {
    this.contentType = this._utilsService.getContentTypeFromActiveRouteData(this._route.snapshot.data);
    this.cardContent = this._searchUtilService.mapSwapiContentTypeToCardContent(this.data, this.contentType);
    this.image$ = this._unsplashService.getImage(this.cardContent.name);
    this.dataId = this._utilsService.getIdFromSwapiUrl(this.cardContent.url, this.contentType);
  }
}
