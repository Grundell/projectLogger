import { Component  } from '@angular/core';
import { AngularFire, FirebaseAuth, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;

  error = false;
  errorMessage = '';
  authState: any;
  signInForm: FormGroup;
  emailControl: FormControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)]));
  passwordControl: FormControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)]));

  projects: FirebaseObjectObservable<any>;

  user: any;
  constructor(
    public af: AngularFire,
    public fb: FormBuilder,
    public auth: FirebaseAuth) {

    const items = af.database.list('/items');
    this.projects = af.database.object('/projects');

    this.af.auth.subscribe(auth => console.log(auth));

    this.signInForm = fb.group({
        'email': this.emailControl,
        'password': this.passwordControl
      });

/*
     let data = {
        "company": 'SWEDEN',
        "country": 'Sweden',
        "additional": {
          "test": "new",
          "string": "random"
        }
     }
     items.push(data); */
  }


   login() {
     console.log('form value', this.af.auth);
     this.af.auth.login({
        email: this.signInForm.value.email,
        password: this.signInForm.value.password,
      });
      this.user = this.af.auth;
    }

    logout() {
       this.af.auth.logout();
    }

}
