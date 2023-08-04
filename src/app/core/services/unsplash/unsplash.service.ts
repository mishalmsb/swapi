import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUnsplashPaginatedResponse } from '@core/models/unsplash';
import { environment } from '@env';
import { Observable, Observer } from 'rxjs';
import { dummyImage } from '@core/mocks/dummyImages';

// Todo: Improve service
// Currently returning dummy image if error
@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private _http: HttpClient) {}

  // Todo: find better image api
  getImage(name: string): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      this._http
        .get<IUnsplashPaginatedResponse>(
          `${environment.unsplash.baseUrl}?client_id=${environment.unsplash.accessKey}&page=1&query=${name}&orientation=landscape&per_page=1`
        )
        .subscribe({
          next: (v) => {
            if (v.results.length) {
              observer.next(v.results[0].urls.small);
            } else {
              observer.next(dummyImage);
            }
            observer.complete();
          },
          error: () => {
            console.log('error');
            observer.next(dummyImage);
            observer.complete();
          },
        });
    });
  }
}
