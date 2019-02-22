import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-live',
  templateUrl: 'live.html',
})
export class LivePage {
  // the variable that will hold the data from the API promise
  public Live:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
  //When the page is loaded the function getLIVETeamsFromLIVEAPI() will be run
  ionViewDidLoad() {
    this.getLIVETeamsFromLIVEAPI();
  }
  //The data from the function getDataFromLIVEAPIPromise () is retrived from rest.ts
  //The data from the API call is stored in an object called Match which is also contained in an object called teams
  //data.teams.Match will retrive the data within the two objects
  //This data is the assigned to the variable Live
  getLIVETeamsFromLIVEAPI()
  {
    this.restProvider.getDataFromLIVEAPIPromise().then(data=>{console.log("in live page");
    this.Live = data.teams.Match;
    console.log("data obtained from promise");
  });
  }

}
