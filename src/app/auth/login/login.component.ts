import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mobileNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  mobileNumber = 783876626;
  password = 123456;
  doLogin() {
    if (this.loginForm.value.mobileNumber === this.mobileNumber && this.loginForm.value.password === this.password) {
      this.router.navigate(['/index']); 
    }
  }

}
