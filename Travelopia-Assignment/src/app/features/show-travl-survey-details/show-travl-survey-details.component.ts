import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { travelSurvey } from 'src/app/models/TravelSurvey.model';


@Component({
  selector: 'app-show-travl-survey-details',
  templateUrl: './show-travl-survey-details.component.html',
  styleUrls: ['./show-travl-survey-details.component.scss']
})
export class ShowTravlSurveyDetailsComponent implements OnInit {

  travelSurveys: travelSurvey[] = [];

  displayedColumns : string[] = ['fullName','emailAddress','travelPlace','numberOfTravelers','budgetPerPersonInDollar']
  constructor(private http: HttpClient)
  {
    
  }

  ngOnInit(): void {
    this.http.get('https://localhost:7156/GetAllTravelSurveyDetails')
    .subscribe({
     next : (res) =>
     {
      this.travelSurveys = res as travelSurvey[];
     },
     error : (error)=>{
       console.log(error);
     }
    })
  }
}
