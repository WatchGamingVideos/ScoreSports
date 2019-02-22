import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { LaLigaPage } from '../../pages/la-liga/la-liga';

@IonicPage()
@Component({
  selector: 'page-next-15-la-liga',
  templateUrl: 'next-15-la-liga.html',
})
export class Next_15LaLigaPage {
  // the variable that will hold the data from the API promise
  next15LLMatches: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
  //When the page is loaded the function getnext15LLFromPromise() will be run
  ionViewDidLoad() {
    this.getnext15LLFromPromise();
  }
  //The data from the function getDataFromnext15LLAPIPromise() is retrived from rest.ts
  //The data from the API call is stored in an object called events
  //data.events will retrive the data within events
  //This data is the assigned to the variable next15BLMatches
  getnext15LLFromPromise()
  {
    this.restProvider.getDataFromnext15LLAPIPromise().then(data=> {console.log("in next 15 La Liga page");
    this.next15LLMatches = data.events;  /** make sure we say table here for this particular JSON */
    console.log("data obtained from promise");
  });
  }

}
