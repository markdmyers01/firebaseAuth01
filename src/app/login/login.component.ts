import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  errCond = false;

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  // Email/Password Login
  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password,
        }).then(
        (success) => {
          console.log(success); //remove in production
          this.router.navigate(['/home']);
          this.errCond = false;
        }).catch(
        (err) => {
          console.log(err); //remove in production
          this.error = err;
          this.errCond = true;
        })
    }
  }

  // Google Authentication
  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/home']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  //Facebook Authentication
  loginFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/home']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  // Twitter Authentication
  loginTwitter() {
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/home']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  //GitHub Authentication
  loginGitHub() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/home']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  ngOnInit() {
  }

}
