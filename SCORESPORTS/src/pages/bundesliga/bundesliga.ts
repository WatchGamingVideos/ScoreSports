import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { HomePage } from '../../pages/home/home';
import { Last_15BundesligaPage } from '../../pages/last-15-bundesliga/last-15-bundesliga';
import { Next_15BundesligaPage } from '../../pages/next-15-bundesliga/next-15-bundesliga';


@IonicPage()
@Component({
  selector: 'page-bundesliga',
  templateUrl: 'bundesliga.html',
})
export class BundesligaPage {
  // the variable that will hold the data from the API promise
  public BLTeams:any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
  }
  //When the button for next 15 bundesliga matches is pressed,
  //it will go to the next 15 bundesliga matches page
  public GoToNext15BLMatches(){
    this.navCtrl.push(Next_15BundesligaPage);
  }
  //When the button for next 15 bundesliga matches is pressed,
  //it will go to the next 15 bundesliga matches page
  public GoToLast15BLMatches(){
    this.navCtrl.push(Last_15BundesligaPage);
  }

  //When the page is loaded the function getBLTeamsFromPLAPI() will be run
  ionViewDidLoad() {
    this.getBLTeamsFromPLAPI();
  }

  //The data from the function getDataFromBLAPIPromise() is retrived from rest.ts
  //The data from the API call is stored in an object called table
  //data.table will retrive the data within table
  //This data is the assigned to the variable BLTeams
  getBLTeamsFromPLAPI()
  {
    this.restProvider.getDataFromBLAPIPromise().then(data=>{console.log("in bundesliga page");
    this.BLTeams = data.table;
    console.log("data obtained from promise");
  });
}

}
