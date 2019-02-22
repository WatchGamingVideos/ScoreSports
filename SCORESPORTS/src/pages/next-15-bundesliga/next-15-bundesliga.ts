import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { BundesligaPage } from '../../pages/bundesliga/bundesliga';

@IonicPage()
@Component({
  selector: 'page-next-15-bundesliga',
  templateUrl: 'next-15-bundesliga.html',
})
export class Next_15BundesligaPage {
  // the variable that will hold the data from the API promise
  next15BLMatches:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
  //When the page is loaded the function getnext15BLFromPromise() will be run
  ionViewDidLoad() {
    this.getnext15BLFromPromise();
  }
  //The data from the function getDataFromnext15BLAPIPromise() is retrived from rest.ts
  //The data from the API call is stored in an object called events
  //data.events will retrive the data within events
  //This data is the assigned to the variable next15BLMatches
  getnext15BLFromPromise()
  {
    this.restProvider.getDataFromnext15BLAPIPromise().then(data=> {console.log("in next 15 bundesliga page");
    this.next15BLMatches = data.events;  /** make sure we say table here for this particular JSON */
    console.log("data obtained from promise");
  });
  }

}
