import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { HomePage } from '../../pages/home/home';
import { Last_15SerieAPage } from '../../pages/last-15-serie-a/last-15-serie-a';
import { Next_15SerieAPage } from '../../pages/next-15-serie-a/next-15-serie-a';

@IonicPage()
@Component({
  selector: 'page-serie-a',
  templateUrl: 'serie-a.html',
})
export class SerieAPage {

  public SATeams: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
  }

  public GoToNext15SAMatches(){
    this.navCtrl.push(Next_15SerieAPage);
  }
  public GoToLast15SAMatches(){
    this.navCtrl.push(Last_15SerieAPage);
  }

  ionViewDidLoad(){
    this.getSATeamsFromSAAPI();
  }

    getSATeamsFromSAAPI(){
      this.restProvider.getDataFromSAAPIPromise().then(data=>{console.log("in home page");
      this.SATeams = data.table;
      console.log("data obtained from promise");
    });
  }

}
