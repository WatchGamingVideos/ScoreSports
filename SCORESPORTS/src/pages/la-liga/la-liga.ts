import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { HomePage } from '../../pages/home/home';
import { Last_15LaLigaPage } from '../../pages/last-15-la-liga/last-15-la-liga';
import { Next_15LaLigaPage } from '../../pages/next-15-la-liga/next-15-la-liga';

@IonicPage()
@Component({
  selector: 'page-la-liga',
  templateUrl: 'la-liga.html',
})
export class LaLigaPage {
  // the variable that will hold the data from the API promise
  public LLTeams:any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
  }
  //When the button for next 15 La Liga matches is pressed,
  //it will go to the next 15 La liga matches page
  public GoToNext15LLMatches(){
    this.navCtrl.push(Next_15LaLigaPage);
  }
  //When the button for last 15 La Liga matches is pressed,
  //it will go to the last 15 La Liga matches page
  public GoToLast15LLMatches(){
    this.navCtrl.push(Last_15LaLigaPage);
  }
  //When the page is loaded the function getLLTeamsFromPLAPI() will be run
  ionViewDidLoad() {
    this.getLLTeamsFromLLAPI();
  }
  //The data from the function getDataFromLLAPIPromise() is retrived from rest.ts
  //The data from the API call is stored in an object called table
  //data.table will retrive the data within table
  //This data is the assigned to the variable BLTeams
  getLLTeamsFromLLAPI()
  {
    this.restProvider.getDataFromLLAPIPromise().then(data=>{console.log("in La Liga page");
    this.LLTeams = data.table;
    console.log("data obtained from promise");
  });
  }

}
