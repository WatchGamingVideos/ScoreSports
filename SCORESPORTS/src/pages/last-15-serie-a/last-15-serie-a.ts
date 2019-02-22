import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SerieAPage } from '../../pages/serie-a/serie-a';
import {RestProvider} from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-last-15-serie-a',
  templateUrl: 'last-15-serie-a.html',
})
export class Last_15SerieAPage {
  // the variable that will hold the data from the API promise
  last15SAMatches:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
  //When the page is loaded the function getLast15SAFromPromise() will be run
  ionViewDidLoad() {
    this.getLast15SAFromPromise();
  }
  //The data from the function getDataFromlast15SAAPIPromise() is retrived from rest.ts
  //The data from the API call is stored in an object called events
  //data.events will retrive the data within events
  //This data is the assigned to the variable last15SAMatches
  getLast15SAFromPromise()
  {
    this.restProvider.getDataFromlast15SAAPIPromise().then(data=> {console.log("in last 15 serie a page");
    this.last15SAMatches = data.events;  /** make sure we say table here for this particular JSON */
    console.log("data obtained from promise");
  });
  }

}
