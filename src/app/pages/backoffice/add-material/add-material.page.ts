import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MaterialService } from 'src/app/services/material.service';
import { Router, ActivatedRoute } from "@angular/router";
import * as _ from 'lodash';
declare var $: any;
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.page.html',
  styleUrls: ['./add-material.page.scss'],
})
export class AddMaterialPage implements OnInit {

  form: FormGroup;
  private id: string;
  private isNew: boolean = false;
  computer = false;
  web = false;

  constructor(public ms: MaterialService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private al: AlertService) {

      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.form = new FormGroup({
        'title': new FormControl('', [Validators.pattern('^[A-Za-z0-9èéà,()\'\. ]+$'), Validators.required]),
        'description': new FormControl('', [Validators.pattern('^[A-Za-z0-9èéà,()\'\. ]+$'), Validators.required]),
        'link': new FormControl('', [ Validators.required]),//Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
        'authors': new FormControl('', [ Validators.required]),//Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
        'date': new FormControl('', [ Validators.required]),//Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
        'type': new FormControl('', [ Validators.required]),//Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
        'link_en': new FormControl('', [])//Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
      })
    
      if(!(_.isEmpty(this.id) || _.isNull(this.id) || _.isEqual('new', this.id))){
        this.ms.getMaterial(this.id).subscribe(res => {
          this.form.patchValue(res);
        });
      } else {
        this.isNew = true;
      }
  }

  onItemChange(event){
    if(event.target.value === "web")
      this.web = true;
    else
      this.web = false;
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.form.valid){  
      if(this.isNew){
        this.ms.addMaterial(this.form.value).
          then(() => {
            this.al.successAlert();
            this.form.reset();
          })
          .catch((e) =>{
            console.log(e);
            this.al.errorAlert();
          });
      } else {
        console.log(this.form.value)
        this.ms.updateMaterial(this.id, this.form.value).
          then(() => { 
            this.ms.isImgUploading = false;
            this.ms.isImgUploaded = false;
            this.router.navigate(['/materials'])
          })
          .catch((e) =>{
            console.log(e);
            this.al.errorAlert();
          });
      }
      this.al.closeAlert();
    } else {
      console.log('qua')
      this.al.errorAlert('I campi inseriti non rispettano le regole')
    }
  }

  onScroll(event) {
    if(event.detail.currentY > 0)
      $(".navbar").addClass('navbar-inverse');
    else 
      $(".navbar").removeClass('navbar-inverse');
  };

  fileUpload(event){
    this.ms.fileUpload(event).subscribe(res =>{
      this.form.controls['link'].setValue(res);
    })
  }

 

}
