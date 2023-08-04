import { Component, Input } from '@angular/core';
import { ContentType } from '@core/enums/type';
import { UtilService } from '@core/services/util/util.service';

@Component({
  selector: 'app-icon-by-type',
  templateUrl: './icon-by-type.component.html',
  styleUrls: ['./icon-by-type.component.scss'],
})
export class IconByTypeComponent {
  @Input() contentType: ContentType;
  @Input() tooltip: string;
  @Input() count: number;

  constructor(private _utilsService: UtilService) {}

  get icon() {
    return this._utilsService.getIconByType(this.contentType);
  }
}
