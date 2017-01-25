import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      console.log(formData.value); //remove in production
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
          this.errCond = true;
        })
    }
  }

  //Provider Logins
  providerLogin(from: string) {
    this.af.auth.login({
      provider: this._getProvider(from),
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/home']);
      }).catch(
      (err) => {
        console.log(err);
      })
  }

  //Get Provider
  private _getProvider(from: string){

    switch(from){
      case 'google': return AuthProviders.Google;
      case 'facebook': return AuthProviders.Facebook;
      case 'twitter': return AuthProviders.Twitter;    
      case 'github': return AuthProviders.Github;     
    }
  }

  ngOnInit() {
  }

}
