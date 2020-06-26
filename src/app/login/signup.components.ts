import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';
import  {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.components.html'
  })


export class SignupComponent implements OnInit
{
    title : string = "Sign Up";
    user : User = new User();
    registerForm: FormGroup;
    hide = true;

    constructor(private router: Router, public loginservice : LoginService, private formBuilder: FormBuilder)
    {

    }

    ngOnInit()
    {
      this.registerForm = this.formBuilder.group({
      'username': [this.user.username, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
      'phone': [this.user.phone, [
        Validators.required,
         Validators.minLength(10),
        Validators.maxLength(12)
      ]],
    });
    }

    login() : void
    {
        this.router.navigate(['/']);
    }

    signup(currentuser : User)
    {
        debugger;
        this.loginservice.registerUsers(currentuser).subscribe();
    }

    onRegisterSubmit() {
    alert(this.user.username + ' ' + this.user.email + ' ' + this.user.password + ' ' + this.user.phone);
  }
}
