import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registrationForm = new FormGroup({
  	'username': new FormControl(null, Validators.required), 
  	'email': new FormControl(null, [Validators.required, Validators.email]), 
  	'password1': new FormControl(null, this.checkPassword), 
  	'password2': new FormControl(null)
  }, this.validateSecondPassword)

  checkPassword(control: FormControl): {[s: string]: boolean} {
  	if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(control.value)) {
  		return {"invalidPass": true}
  	} else {
  		return null;
  	}	
  }

  validateSecondPassword(AC: AbstractControl): {[s: string]: boolean} {
    let password = AC.get("password1").value;
    let confirmPassword = AC.get("password2").value;
    if (password !== confirmPassword) {
      AC.get('password2').setErrors({"not-valid": true})
    }
    return null;
  }

  onSomething() {
  	console.log(this.registrationForm)
  }
}
