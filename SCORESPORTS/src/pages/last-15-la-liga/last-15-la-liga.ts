import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { LaLigaPage } from '../../pages/la-liga/la-liga';

@IonicPage()
@Component({
  selector: 'page-last-15-la-liga',
  templateUrl: 'last-15-la-liga.html',
})
export class Last_15LaLigaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
  // the variable that will hold the data from the API promise
  Last15LLMatches: any;
  //When the page is loaded the function getlast15LLFromPromise() will be run
  ionViewDidLoad() {
    this.getlast15LLFromPromise();
  }
  //The data from the function getDataFromlast15LLAPIPromise() is retrived from rest.ts
  //The data from the API call is stored in an object called events
  //data.events will retrive the data within events
  //This data is the assigned to the variable Last15LLMatches
  getlast15LLFromPromise()
  {
    this.restProvider.getDataFromlast15LLAPIPromise().then(data=> {console.log("in last 15 la liga page");
    this.Last15LLMatches = data.events;  /** make sure we say table here for this particular JSON */
    console.log("data obtained from promise");
  });
  }

}
