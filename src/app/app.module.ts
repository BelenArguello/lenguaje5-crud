import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  provideFirebaseApp(() => initializeApp({"projectId":"lenguaje5-crud-bac28","appId":"1:859164572622:web:dafa511850cd63b44f499f",
  "storageBucket":"lenguaje5-crud-bac28.appspot.com","apiKey":"AIzaSyCelPSVB6GQto6CPknX37eqkJHcrOVQ3Kg",
  "authDomain":"lenguaje5-crud-bac28.firebaseapp.com","messagingSenderId":"859164572622"})), 
    provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), 
    provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), 
    providePerformance(() => getPerformance()), provideStorage(() => getStorage()), 
    provideRemoteConfig(() => getRemoteConfig())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
