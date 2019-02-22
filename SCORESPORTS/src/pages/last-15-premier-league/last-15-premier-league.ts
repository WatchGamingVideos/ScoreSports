import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { PremierLeaguePage } from '../../pages/premier-league/premier-league';

@IonicPage()
@Component({
  selector: 'page-last-15-premier-league',
  templateUrl: 'last-15-premier-league.html',
})
export class Last_15PremierLeaguePage {
  // the variable that will hold the data from the API promise
  Last15PLMatches: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
  //When the page is loaded the function getlast15PLFromPromise() will be run
  ionViewDidLoad() {
  this.getlast15PLFromPromise()
  }
  //The data from the function getDataFromlast15PLAPIPromise() is retrived from rest.ts
  //The data from the API call is stored in an object called events
  //data.events will retrive the data within events
  //This data is the assigned to the variable Last15PLMatches
  getlast15PLFromPromise()
  {
    this.restProvider.getDataFromlast15PLAPIPromise().then(data=> {console.log("in last 15 premier league page");
    this.Last15PLMatches = data.events;  /** make sure we say table here for this particular JSON */
    console.log("data obtained from promise");
  });
  }

}
