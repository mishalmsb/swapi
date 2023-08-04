import { ContentType } from '@core/enums/type';

export interface ISearchCard {
  name: string;
  url: string;
  specs: ISearchCardSpecs[];
}

export interface ISearchCardSpecs {
  type: ContentType;
  displayText: string;
  count: number;
}
