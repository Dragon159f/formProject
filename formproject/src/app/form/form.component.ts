import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  //To not get any errors values are defined
  data = {
    total_deal_size: 0,
    tssp_dealsize: 0,
    name: 0,
    date_added: 0,
    mashID: 0,
    status: 0,
    involved_entities: 0,
    deal_code: 0,
    clearTotalDealSize: 0,
    closing_date: null,
    date_committed: null,
  }

  selectedId = 0;
  //Gets the data from the api
  dataCall(){
    this.http.get<any>('https://jasongiang-cacf8.firebaseio.com/data.json?print=pretty').subscribe(result => {
      this.data = result[0];
      console.log(result[0]);
    })
  }
  //Calls all functions to clear input
  clearAll() {
    this.clearClosingDate();
    this.clearDateCommitted();
    this.clearTotalDealSize();
    this.clearTsspDealSize();
  }
  //Clear Total Deal Size field
  clearTotalDealSize(){
    this.data.total_deal_size = undefined;
  }
  //Clear TSSP Deal Size field
  clearTsspDealSize(){
    this.data.tssp_dealsize = undefined;
  }
  //Clear Closing Date field
  clearClosingDate(){
    this.data.closing_date = null;
  }
  //Clear Date Commited Field
  clearDateCommitted(){
    this.data.date_committed = null;
  }
  //Updates All the input into the json file
  updateInput(date_committed, closing_date, tssp_dealsize, total_deal_size, selectedId){
    var updateUrl = "https://jasongiang-cacf8.firebaseio.com/data/" + selectedId + ".json?print=pretty"
      
    var updateObj = {
      date_committed: date_committed,
      closing_date: closing_date,
      total_deal_size: total_deal_size,
      tssp_dealsize: tssp_dealsize
    }
    
    this.http.patch(updateUrl, updateObj).subscribe(
      res => {
        console.log(res)
      }
    )
  }

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.dataCall();
  }

}
