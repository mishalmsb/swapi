import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentType } from '@core/enums/type';
import { SwapiService } from '@core/services/swapi';
import { UtilService } from '@core/services/util/util.service';
import { DetailUtilService } from '../services/detail-util/detail-util.service';
import { ISwapiDetail } from '../models/detail';
import { UnsplashService } from '@core/services/unsplash/unsplash.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  data: ISwapiDetail;
  contentType: ContentType;
  dataId: number;
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _detailUtilService: DetailUtilService = inject(DetailUtilService);
  private _unsplashService: UnsplashService = inject(UnsplashService);

  constructor(private _swapiService: SwapiService, private _utilsService: UtilService) {}

  ngOnInit(): void {
    this.contentType = this._utilsService.getContentTypeFromActiveRouteData(this._route.snapshot.data);
    this.dataId = +this._route.snapshot.params['id'];

    this._swapiService.getById(this.dataId, this.contentType).subscribe({
      next: (data) => {
        this.data = this._detailUtilService.mapSwapiContentTypeToDetail(data, this.contentType);
        this.loadImage();
      },
      // TODO: handle error
      // error: (e) => console.error(e),
    });
  }

  loadImage(): void {
    this._unsplashService.getImage(this.data.name).subscribe({
      next: (image) => {
        this.data.image = image;
      },
    });
  }
}
