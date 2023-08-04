import { ContentType } from '@core/enums/type';

export interface IBaseSearchFilters {
  query: string;
  page: number;
}

export class BaseSearchFilters implements IBaseSearchFilters {
  public query: string;
  public page: number;

  constructor(query: string = '', page: number = 1) {
    this.query = query;
    this.page = page;
  }
}

export interface ISearchFilters extends IBaseSearchFilters {
  contentType: ContentType;
}
