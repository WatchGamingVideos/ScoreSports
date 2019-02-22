import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BundesligaPage } from './bundesliga';

@NgModule({
  declarations: [
    BundesligaPage,
  ],
  imports: [
    IonicPageModule.forChild(BundesligaPage),
  ],
})
export class BundesligaPageModule {}
