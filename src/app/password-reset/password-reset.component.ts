import { Component, Inject } from '@angular/core';
import { AngularFire, FirebaseApp } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passoword-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent {
  private auth: any;
  errCond = false;

  constructor(
    private af: AngularFire,
    @Inject(FirebaseApp) fa: any,
    private router: Router) {
    this.auth = fa.auth();
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.auth.sendPasswordResetEmail(formData.value.email)
        .then((success) => {
          console.log(success); //remove in production
          this.router.navigate(['/login']);
          this.errCond = false;
        }).catch(
        (err) => {
          console.log(err); //remove in production
          this.errCond = true;
        })
    }
  }
}
