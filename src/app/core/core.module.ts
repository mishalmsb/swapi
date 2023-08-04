import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [NavbarComponent, PageNotFoundComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [NavbarComponent, PageNotFoundComponent],
})
export class CoreModule {}
