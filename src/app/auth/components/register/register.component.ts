import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = this.buildForm();
  public hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.refreshValidatorConfirmPass();
  }
  
  buildForm(email?: string | ''): FormGroup{
    return this.formBuilder.group({
      email: [email, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: [''],
      terms: [false, Validators.requiredTrue]
    })
  }

  register(event: Event): void{
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      this.authService.createUser(value.email, value.password)
        .then(() => this.router.navigate(['/login']))
        .catch((err: any) => console.error(err));
    }
  }

  refreshValidatorConfirmPass(): void{
    this.form.controls['password'].valueChanges.subscribe( password =>{
      this.form.get("confirmPass")?.setValidators(
        [Validators.required, Validators.pattern(password)]
      );
    });
  }
}
