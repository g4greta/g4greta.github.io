import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MetatagsService } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup;

  constructor(
    private auth: AuthenticationService,
    private al: AlertService,
    private meta: MetatagsService
    ) { 
      this.meta.setTitle('G4Greta | Login')
      this.loginForm = new FormGroup({
        'email': new FormControl('', [Validators.email, Validators.required]),
        'password': new FormControl('', Validators.required),
      })

  }

  onSubmit(){
    if (this.loginForm.valid)
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
    else
      this.al.errorAlert('I campi inseriti non rispettano le regole')
  }

  ngOnInit() {
  }

}
