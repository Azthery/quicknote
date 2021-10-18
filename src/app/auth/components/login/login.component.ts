import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.buildForm();
  public wrongData: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {};

  ngOnInit(): void {
  };

  private buildForm(email?: string | '' ): FormGroup{
    return this.formBuilder.group({
      email: [email, [Validators.required]],
      password: ['', [Validators.required]],
    })
  };

  login(event: Event): void{
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      this.authService.login(value.email, value.password)
        .then(() => this.router.navigate(['/notes']))
        .catch(() =>{
          this.form = this.buildForm(value.email);
          this.wrongData = true;
        })
    }
  };
}
