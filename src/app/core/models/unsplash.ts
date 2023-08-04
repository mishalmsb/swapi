export interface IUnsplashPaginatedResponse {
  results: IUnsplash[];
}

export interface IUnsplash {
  urls: IUnsplashUrls;
}

export interface IUnsplashUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}
