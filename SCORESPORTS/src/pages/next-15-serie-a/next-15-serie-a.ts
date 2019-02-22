import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { SerieAPage } from '../../pages/serie-a/serie-a';

@IonicPage()
@Component({
  selector: 'page-next-15-serie-a',
  templateUrl: 'next-15-serie-a.html',
})
export class Next_15SerieAPage {
  // the variable that will hold the data from the API promise
  next15SAMatches:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
  //When the page is loaded the function getnext15BLFromPromise() will be run
  ionViewDidLoad() {
    this.getNext15SAFromPromise();
  }
  //The data from the function getDataFromnext15SAAPIPromise() is retrived from rest.ts
  //The data from the API call is stored in an object called events
  //data.events will retrive the data within events
  //This data is the assigned to the variable next15SAMatches
  getNext15SAFromPromise()
  {
    this.restProvider.getDataFromnext15SAAPIPromise().then(data=> {console.log("in home page");
    this.next15SAMatches = data.events;  /** make sure we say table here for this particular JSON */
    console.log("data obtained from promise");
  });
  }

}
