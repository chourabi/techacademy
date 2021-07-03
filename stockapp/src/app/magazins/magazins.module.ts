import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagazinsRoutingModule } from './magazins-routing.module';
import { MagazinsComponent } from './magazins.component';


@NgModule({
  declarations: [MagazinsComponent],
  imports: [
    CommonModule,
    MagazinsRoutingModule
  ]
})
export class MagazinsModule { }
