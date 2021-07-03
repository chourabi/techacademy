import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagazinsComponent } from './magazins.component';

const routes: Routes = [{ path: '', component: MagazinsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagazinsRoutingModule { }
