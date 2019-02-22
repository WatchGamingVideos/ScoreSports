import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { PremierLeaguePage } from '../../pages/premier-league/premier-league';

@IonicPage()
@Component({
  selector: 'page-next-15-premier-league',
  templateUrl: 'next-15-premier-league.html',
})
export class Next_15PremierLeaguePage {
  // the variable that will hold the data from the API promise
  next15PLMatches:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
  //When the page is loaded the function getnext15BLFromPromise() will be run
  ionViewDidLoad() {
    this.getnext15PLFromPromise()
  }
  //The data from the function getDataFromnext15PLAPIPromise() is retrived from rest.ts
  //The data from the API call is stored in an object called events
  //data.events will retrive the data within events
  //This data is the assigned to the variable next15PLMatches
  getnext15PLFromPromise()
  {
    this.restProvider.getDataFromnext15PLAPIPromise().then(data=> {console.log("in home page");
    this.next15PLMatches = data.events;  /** make sure we say table here for this particular JSON */
    console.log("data obtained from promise");
  });
  }

}
