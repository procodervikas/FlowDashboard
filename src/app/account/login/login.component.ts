import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginform = new FormGroup({
      email : new FormControl('' , Validators.required),
      password : new FormControl('' , Validators.required)
  })
  
  get email(){
    return this.loginform.get('email');
  }

  setData(data){
    console.log(data);
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
