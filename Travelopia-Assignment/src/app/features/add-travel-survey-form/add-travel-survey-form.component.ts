import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { travelSurvey } from 'src/app/models/TravelSurvey.model';

@Component({
  selector: 'app-add-travel-survey-form',
  templateUrl: './add-travel-survey-form.component.html',
  styleUrls: ['./add-travel-survey-form.component.scss']
})
export class AddTravelSurveyFormComponent {

  travelDetailsToAdd : travelSurvey;

  addTravelSurveyDetailsForm = new FormGroup({
    id : new FormControl(),
    fullName: new FormControl('', [Validators.required]),
    emailAddress: new FormControl('', [Validators.required]),
    travelPlace: new FormControl('', [Validators.required]),
    numberOfTravelers: new FormControl('', [Validators.required]),
    budgetPerPersonInDollar: new FormControl('', [Validators.required]),
  });
  
  constructor(private http: HttpClient,
    private router: Router
    )
  {
  }

  AddTravelSurveyDetails()
  {

    this.travelDetailsToAdd = this.addTravelSurveyDetailsForm.value as any;
    this.http.post('https://localhost:7156/AddTravelSurveyDetails',this.travelDetailsToAdd)
    .subscribe({
     next : (res) =>
     {
       this.router.navigateByUrl('/travelSurveys');
     },
     error : (error)=>{
       console.log(error);
     }
    })
  }
}
