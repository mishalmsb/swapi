import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { SharedModule } from '@shared/shared.module';

import { DetailComponent } from './components/detail.component';

import { DetailUtilService } from './services/detail-util/detail-util.service';

@NgModule({
  declarations: [DetailComponent],
  imports: [DetailRoutingModule, CommonModule, SharedModule],
  providers: [DetailUtilService],
})
export class DetailModule {}
