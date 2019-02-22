import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PremierLeaguePage } from './premier-league';

@NgModule({
  declarations: [
    PremierLeaguePage,
  ],
  imports: [
    IonicPageModule.forChild(PremierLeaguePage),
  ],
})
export class PremierLeaguePageModule {}
