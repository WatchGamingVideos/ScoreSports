import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { HomePage } from '../../pages/home/home';
import { Last_15PremierLeaguePage } from '../../pages/last-15-premier-league/last-15-premier-league';
import { Next_15PremierLeaguePage } from '../../pages/next-15-premier-league/next-15-premier-league';

@IonicPage()
@Component({
  selector: 'page-premier-league',
  templateUrl: 'premier-league.html',
})
export class PremierLeaguePage {
  // the variable that will hold the data from the API promise
  public plTeams: any;
    constructor(public navCtrl: NavController, public restProvider: RestProvider) {

    }
    //When the button for next 15 Premier League matches is pressed,
    //it will go to the next Premier League matches page
    public GoToNext15PLMatches(){
      this.navCtrl.push(Next_15PremierLeaguePage);
    }
    //When the button for last 15 Premier League matches is pressed,
    //it will go to the last Premier League matches page
    public GoToLast15PLMatches(){
      this.navCtrl.push(Last_15PremierLeaguePage);
    }
    //When the page is loaded the function getPLTeamsFromPromise() will be run
  	ionViewDidLoad()
  	{
  	 	this.getPLTeamsFromPromise();
  	}
    //The data from the function getDataPLAPIPromise() is retrived from rest.ts
    //The data from the API call is stored in an object called table
    //data.table will retrive the data within table
    //This data is the assigned to the variable BLTeams
  	getPLTeamsFromPromise()
    {
  	 	this.restProvider.getDataPLAPIPromise().then(data=> {console.log("in home page");
  	 	this.plTeams = data.table;  /** make sure we say table here for this particular JSON */
  	 	console.log("data obtained from promise");
      });
    }
}
