import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services';
import { Router } from '@angular/router';
import { User } from 'src/app/models';

@Component({
  selector: 'app-mat-register',
  templateUrl: './mat-register.component.html',
  styleUrls: ['./mat-register.component.css']
})
export class MatRegisterComponent implements OnInit {
  hide = true;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: any;


  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({      
      firstNameControl: ['', [Validators.required]],
      lastNameControl: ['', [Validators.required]],
      emailControl: ['', [Validators.required, Validators.email]],
      passwordControl: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get controls() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    const user: User = {
      id: 1,
      firstName : this.controls.firstNameControl.value,
      lastName : this.controls.lastNameControl.value,
      email : this.controls.emailControl.value,
      password : this.controls.passwordControl.value,
      role: ''
    };
    this.userService.register(user)
      .pipe(first())
      .subscribe(
        data => {
           this.router.navigate(['/home']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
