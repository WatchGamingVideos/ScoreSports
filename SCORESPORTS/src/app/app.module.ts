import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { BundesligaPage } from '../pages/bundesliga/bundesliga';
import { LaLigaPage } from '../pages/la-liga/la-liga';
import { LivePage } from '../pages/live/live';
import { PremierLeaguePage } from '../pages/premier-league/premier-league';
import { SerieAPage } from '../pages/serie-a/serie-a';
import { Last_15PremierLeaguePage } from '../pages/last-15-premier-league/last-15-premier-league';
import { Next_15PremierLeaguePage } from '../pages/next-15-premier-league/next-15-premier-league';
import { Last_15LaLigaPage } from '../pages/last-15-la-liga/last-15-la-liga';
import { Next_15LaLigaPage } from '../pages/next-15-la-liga/next-15-la-liga';
import { Last_15BundesligaPage } from '../pages/last-15-bundesliga/last-15-bundesliga';
import { Next_15BundesligaPage } from '../pages/next-15-bundesliga/next-15-bundesliga';
import { Last_15SerieAPage } from '../pages/last-15-serie-a/last-15-serie-a';
import { Next_15SerieAPage } from '../pages/next-15-serie-a/next-15-serie-a';




import {RestProvider} from '../providers/rest/rest';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BundesligaPage,
    LaLigaPage,
    LivePage,
    PremierLeaguePage,
    SerieAPage,
    Last_15PremierLeaguePage,
    Next_15PremierLeaguePage,
    Last_15LaLigaPage,
    Next_15LaLigaPage,
    Last_15BundesligaPage,
    Next_15BundesligaPage,
    Last_15SerieAPage,
    Next_15SerieAPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BundesligaPage,
    LaLigaPage,
    LivePage,
    PremierLeaguePage,
    SerieAPage,
    Last_15PremierLeaguePage,
    Next_15PremierLeaguePage,
    Last_15LaLigaPage,
    Next_15LaLigaPage,
    Last_15BundesligaPage,
    Next_15BundesligaPage,
    Last_15SerieAPage,
    Next_15SerieAPage

  ],
  providers: [
    StatusBar,
    RestProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
