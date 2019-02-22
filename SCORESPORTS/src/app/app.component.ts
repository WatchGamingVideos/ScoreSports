import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BundesligaPage } from '../pages/bundesliga/bundesliga';
import { LaLigaPage } from '../pages/la-liga/la-liga';
import { LivePage } from '../pages/live/live';
import { PremierLeaguePage } from '../pages/premier-league/premier-league';
import { SerieAPage } from '../pages/serie-a/serie-a';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  // an array to hold the page name and to link the page
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // Side menu contains the selections that when pressed will go to each page
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Premier League', component: PremierLeaguePage },
      { title: 'LaLiga', component: LaLigaPage },
      { title: 'Bundesliga', component: BundesligaPage },
      { title: 'Serie A', component: SerieAPage },
      { title: 'Live', component: LivePage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    this.nav.setRoot(page.component);
  }
}
