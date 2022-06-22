import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayModePage } from './play-mode.page';

const routes: Routes = [
  {
    path: '',
    component: PlayModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayModePageRoutingModule {}
