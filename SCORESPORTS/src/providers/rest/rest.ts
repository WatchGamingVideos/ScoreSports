import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {


	PLAPI = 'https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1819';
	LLAPI = 'https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4335&s=1819';
	BLAPI = 'https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4331&s=1819';
  SAAPI = 'https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4332&s=1819';
	LIVE =  'https://www.thesportsdb.com/api/v1/json/1/latestsoccer.php';

	next15PLAPI = "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328";
	last15PLAPI = "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328"
	next15LLAPI = "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4335";
	last15LLAPI = "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4335";
	next15BLAPI = "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4331";
	last15BLAPI = "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4331";
	next15SAAPI = "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4332";
	last15SAAPI = "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4332";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


//Promise retrives JSON object from link assigned to PLAPI
//PLAPI contains the data for the Premier League table for the 18/19 season
//This data is then stored in the variable data
getDataPLAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.PLAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to BLAPI
//BLAPI contains the data for the Bundesliga table for the 18/19 season
//the data retived from BLAPI  is then stored in the variable data
getDataFromBLAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.BLAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to SAAPI
//SAAPI contains the data for the Serie A table for the 18/19 season
//the data retived from SAAPI  is then stored in the variable data
getDataFromSAAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.SAAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to LLAPI
//LLAPI contains the data for the La Liga table for the 18/19 season
//the data retived from SAAPI  is then stored in the variable data
getDataFromLLAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.LLAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to LIVE
//LIVE contains the data for live matches
//the data retived from LIVE  is then stored in the variable data
getDataFromLIVEAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.LIVE).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to next15PLAPI
//next15PLAPI contains the data for the next 15 matches in the Premier League
//the data retived from next15PLAPI  is then stored in the variable data
getDataFromnext15PLAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.next15PLAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to last15PLAPI
//last15PLAPI contains the data for the last 15 matches in the Premier League
//the data retived from last15PLAPI  is then stored in the variable data
getDataFromlast15PLAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.last15PLAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to next15LLAPI
//next15LLAPI contains the data for the last 15 matches in La Liga
//the data retived from next15LLAPI  is then stored in the variable data
getDataFromnext15LLAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.next15LLAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to last15LLAPI
//last15LLAPI contains the data for the last 15 matches in the Premier League
//the data retived from last15LLAPI  is then stored in the variable data
getDataFromlast15LLAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.last15LLAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to next15BLAPI
//next15BLAPI contains the data for the next 15 matches in the Bundesliga
//the data retived from next15BLAPI  is then stored in the variable data
getDataFromnext15BLAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.next15BLAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to last15BLAPI
//last15BLAPI contains the data for the last 15 matches in the Bundesliga
//the data retived from last15BLAPI  is then stored in the variable data
getDataFromlast15BLAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.last15BLAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to next15SAAPI
//next15SAAPI contains the data for the next 15 matches in Serie A
//the data retived from next15SAAPI  is then stored in the variable data
getDataFromnext15SAAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.next15SAAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}

//Promise retrives JSON object from link assigned to last15SAAPI
//last15SAAPI contains the data for the last 15 matches in Serie A
//the data retived from last15SAAPI  is then stored in the variable data
getDataFromlast15SAAPIPromise() {
  return new Promise(resolve => {
    this.http.get(this.last15SAAPI).subscribe(data => {
      resolve(data);
      console.log("Subscribed to the Data Promise");
    }, err => {
      console.log(err);
    });
  });
}


}
