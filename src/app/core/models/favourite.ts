import { ContentType } from '@core/enums/type';

export interface IFavourite {
  type: ContentType;
  id: number;
  name: string;
}
