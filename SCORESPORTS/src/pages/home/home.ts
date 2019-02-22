import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BundesligaPage } from '../../pages/bundesliga/bundesliga';
import { LaLigaPage } from '../../pages/la-liga/la-liga';
import { LivePage } from '../../pages/live/live';
import { PremierLeaguePage } from '../../pages/premier-league/premier-league';
import { SerieAPage } from '../../pages/serie-a/serie-a';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  //When the image for Premier League is pressed,
  //it will go to the Premier League page
  public GoToPremierLeague(){
  this.navCtrl.push(PremierLeaguePage);
  }

  //When the image for La Liga is pressed,
  //it will go to the La Liga page
  public GoToLaLiga(){
    this.navCtrl.push(LaLigaPage);
  }
  //When the image for bundesliga is pressed,
  //it will go to the bundesliga page
  public GoToBundesliga(){
    this.navCtrl.push(BundesligaPage);
  }
  //When the image for Serie A is pressed,
  //it will go to the Serie A page
  public GoToSerieA(){
    this.navCtrl.push(SerieAPage);
  }
  //When the button for La Liga is pressed,
  //it will go to the La Liga page
  public GoToLive(){
    this.navCtrl.push(LivePage);
  }

}
