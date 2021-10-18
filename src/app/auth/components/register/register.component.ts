import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = this.buildForm();
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void { }

  buildForm(email?: string | ''): FormGroup{
    return this.formBuilder.group({
      email: [email, [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    })
  }

  register(event: Event): void{
    event.preventDefault();
    const value = this.form.value;

    console.log(this.form.value);
    if(this.form.valid && (value.email === value.repeatpassword)){

      this.authService.createUser(value.email, value.password)
        .then(() => this.router.navigate(['/login']))
        .catch((err: any) => console.error(err))
    } else{
      
    }
  }

}
