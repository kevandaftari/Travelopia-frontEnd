import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTravelSurveyFormComponent } from './features/add-travel-survey-form/add-travel-survey-form.component';
import { ShowTravlSurveyDetailsComponent } from './features/show-travl-survey-details/show-travl-survey-details.component';

const routes: Routes = [
  {
    path: 'add-travelSurvey',
    component: AddTravelSurveyFormComponent,
  },
  {
    path: 'travelSurveys',
    component: ShowTravlSurveyDetailsComponent,
  },
  { path: '**',
    redirectTo: 'add-travelSurvey' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
