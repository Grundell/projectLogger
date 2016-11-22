import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MaterialModule } from '@angular/material';

import { NgSemanticModule } from 'ng-semantic';
import { IndexComponent } from './index/index.component';
import { AddProjectComponent } from './add-project/add-project.component';


import { routing, appRoutingProviders }    from './app.routes';
import { SingleProjectComponent } from './single-project/single-project.component';
import { CurrencySEKPipe } from './shared/currency-sek.pipe';

import {SlackIntergrationService } from './shared/slack-intergration.service';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCjwX3_ADXrNZhwoq6zekYZm7fROKFzXPM",
  authDomain: "project-logger-1b4e4.firebaseapp.com",
  databaseURL: "https://project-logger-1b4e4.firebaseio.com",
  storageBucket: "project-logger-1b4e4.appspot.com",
};

const FirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddProjectComponent,
    SingleProjectComponent,
    CurrencySEKPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    [MaterialModule.forRoot()],
    AngularFireModule.initializeApp(firebaseConfig, FirebaseAuthConfig),
    NgSemanticModule,
  ],
  providers: [
    SlackIntergrationService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
