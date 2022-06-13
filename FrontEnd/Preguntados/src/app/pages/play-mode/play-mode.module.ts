import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayModePageRoutingModule } from './play-mode-routing.module';

import { PlayModePage } from './play-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayModePageRoutingModule
  ],
  declarations: [PlayModePage]
})
export class PlayModePageModule {}
