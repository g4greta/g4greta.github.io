import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RatingService } from 'src/app/services/rating.service';
import { Observable, map } from 'rxjs';

import { SURVEY } from './template';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  constructor(private http: HttpClient,
    public ratingService: RatingService) { 
  }

  surveyIndex = 0;
  rates = [];
  isFinished = false;
  entry = ["entry.1366670058", "entry.1824053964", "entry.1399087615", "entry.1665695817", "entry.1874959558", "entry.1869930547", "entry.448681330","entry.13632905", "entry.1065190922", "entry.598845150"]
  canShowInput = false;
  survey = SURVEY;
  inputField2;
  l = this.survey.length;
  textAnswer = "";

  ngOnInit() {
    console.log(this.survey.length)
  }

  //per la sezione mixed
  getMixed(){
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="radio"]:checked');
    console.log(checkboxes.length)
    
      if (this.canShowInput) {
        if (this.inputField2 != undefined) {
          this.next(this.inputField2);
        }
      } else{
        if(checkboxes.length > 0){
          this.next('no');
        }
      }
  }

  showInput(val) {
    if(val === "yes"){
      this.canShowInput = true;
    } else {
      this.canShowInput = false;
    }
  }

  // progress bar per le domande
  update(){
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle, index) => {
      if (index < this.surveyIndex +1) circle.classList.add("active");
      else circle.classList.remove("active");
    });
    const progress = document.getElementById("progress");

    const actives = document.querySelectorAll(".active");
    progress.style.width = "200px"
      // ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  }

  getMulti(){
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="checkbox"]:checked');
    if(checkboxes.length > 0) {
      const checkedValues: string[] = [];

      checkboxes.forEach((checkbox) => {
        checkedValues.push(checkbox.value);
      });
  
      const checkedValuesString = checkedValues.join(', ');
      this.next(checkedValuesString);
    }
    
  }

  getSingle(){
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="radio"]:checked');
    if(checkboxes.length > 0) {
      const checkedValues: string[] = [];

      checkboxes.forEach((checkbox) => {
        checkedValues.push(checkbox.value);
      });
  
      console.log(checkedValues);
  
      const checkedValuesString = checkedValues.join(', ');
      this.next(checkedValuesString);
    }
   
  }

  sendAnswers(){
    // this.rates = ["ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao", "ciao"]
    var urlencoded = new URLSearchParams();
    for (let i=0; i<this.survey.length; i++){
      console.log(this.entry[i], this.rates[i])
      urlencoded.append(this.entry[i], this.rates[i]);
    }
    console.log(urlencoded)
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.http
      .post('https://docs.google.com/forms/u/0/d/e/1FAIpQLSceAqXK9-raW8ijyVITvGOwyYyAUhVB1ei0MqLtoA-V2v1UeA/formResponse', urlencoded, {headers})
      .subscribe((response) => {
        console.log(response);
      });
    
  }


  getText(val){
    
    this.next(val);
    this.textAnswer = ""
  }

  // prossima domanda
  next(rate){
    
    if(rate === undefined || rate === null || rate === "")
      rate = "null";
    
    console.log(rate);
    this.rates.push(rate);
    this.update();
    this.surveyIndex++;
    if(this.surveyIndex == this.survey.length){
      this.sendAnswers();
      console.log(this.rates)
      this.isFinished = true;
    }
  }

  // rate finale dalle stelle
  getRate(){
    let val = this.ratingService.getRating();
    if (val.length == this.survey[this.surveyIndex].questions.length){
      this.ratingService.freeRating();
      this.ratingService.freeRating();
      const rating = val.join(', ');
      this.next(rating);
    }

  }

}
