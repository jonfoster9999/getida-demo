import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myForm = new FormGroup({
  	name: new FormControl(), 
  	password: new FormControl()
  })

  onSubmit() {
  	alert("yo")
  }

}
