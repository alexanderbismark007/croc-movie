import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterPage } from './master.page';

const routes: Routes = [
  {
    path: '',
    component: MasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterPageRoutingModule {}
