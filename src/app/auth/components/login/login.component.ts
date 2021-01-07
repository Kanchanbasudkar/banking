import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/httpservice/http.service';
import { SharedservicesService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  myVal = 6;
  registerForm: FormGroup;

  submitted = false;
  HttpserviceService: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private sharedservices: SharedservicesService,
    private httpservice: HttpService
  ) {

  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],

    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    this.sharedservices.storeUser(this.registerForm.value.userName)
    console.log(this.registerForm.value.userName);


    let obj = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
    this.httpservice.login(obj).subscribe(result => {
      console.log("inside", result);
      if (result != undefined) {
        console.log(result);
        Object.entries(result).forEach(([key, value]) => {
          if (key === 'token') {
            let token = value;
            localStorage.setItem('token', token);
            console.log("the token of login is ", token);
          }
        });
      }
       })
            this.router.navigate(['dashboard'])

            //this.toastr.success("you have login sucessfully");
          }

        }
