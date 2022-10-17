import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireAnalyticsModule, APP_NAME, APP_VERSION, ScreenTrackingService, UserTrackingService} from '@angular/fire/compat/analytics';


@NgModule({
    imports: [
        // firebase
        //à chaque fois tu initialise l 'application, tu pointe sur la constate environment qui contient la variable firebase et pointe sur la clé pour faire la connexion
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireAnalyticsModule,
    ],
    exports: [
        AngularFireAuthModule,
        AngularFireAnalyticsModule,
    ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    {provide: APP_NAME, useValue: ''},
    {provide: APP_VERSION, useValue: '0.1.0'}
  ],

})
export class FirebaseModule {
}

 