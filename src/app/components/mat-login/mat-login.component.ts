import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-login',
  templateUrl: './mat-login.component.html',
  styleUrls: ['./mat-login.component.css']
})
export class MatLoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailControl: ['', [Validators.required, Validators.email]],
      passwordControl: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get controls() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

  }

}
