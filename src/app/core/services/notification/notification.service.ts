import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _toast: NgToastService) {}

  showSuccessMessage(msg: string) {
    this._toast.success({ detail: 'SUCCESS', summary: msg });
  }

  showErrorMessage(msg: string) {
    this._toast.error({ detail: 'ERROR', summary: msg });
  }
}
