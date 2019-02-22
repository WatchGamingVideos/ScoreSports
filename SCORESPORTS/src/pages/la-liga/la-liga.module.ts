import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaLigaPage } from './la-liga';

@NgModule({
  declarations: [
    LaLigaPage,
  ],
  imports: [
    IonicPageModule.forChild(LaLigaPage),
  ],
})
export class LaLigaPageModule {}
