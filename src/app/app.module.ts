import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth' ;

//   -- All Pages --
import { TabsPage } from '../pages/tabs/tabs';
import { TodayPage} from "../pages/today/today";
import { PlanPage} from "../pages/plan/plan";
import { SummaryPage} from "../pages/summary/summary";
import { ProfilePage} from "../pages/profile/profile";
import { ResisterPage} from "../pages/resister/resister";
import { LoginPage} from "../pages/login/login";
import { CreateprofilePage} from "../pages/createprofile/createprofile";
import {WelcomePage} from "../pages/welcome/welcome";


const config = {
    apiKey: "AIzaSyCQliEyS1ux9byHcivDyAh2LXi4GmxWaQo",
    authDomain: "timeplannerapp.firebaseapp.com",
    databaseURL: "https://timeplannerapp.firebaseio.com",
    projectId: "timeplannerapp",
    storageBucket: "",
    messagingSenderId: "515392143553"
};



@NgModule({
  declarations: [
    MyApp,
    TodayPage,
    PlanPage,
    SummaryPage,
    ProfilePage,
    ResisterPage,
    LoginPage,
    CreateprofilePage,
    WelcomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodayPage,
    PlanPage,
    SummaryPage,
    ProfilePage,
    ResisterPage,
    LoginPage,
    CreateprofilePage,
    WelcomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
