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

  doLogin() {
    if (this.loginForm.value.mobileNumber == '7683876626' && this.loginForm.value.password == '123456') {
      this.router.navigate(['/index']);
    }

    // if (this.loginForm.value.mobileNumber.value == mobileNumber && this.loginForm.value.password.value == password) {
    //   console.log("Login successfully !!");
    //   console.log(this.loginForm.value.mobileNumber, this.loginForm.value.password);
    //   this.router.navigate(['/index']);
    // }
    // else {
    //   console.log("Wrong credentials, please try again");
    //   console.log(this.loginForm.value.mobileNumber, this.loginForm.value.password);
    // }
  }

}
