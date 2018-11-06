import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HistoricoPage } from '../pages/historico/historico';
import { PerfilPage } from '../pages/perfil/perfil';
import { CriarPeladaPage } from '../pages/criar-pelada/criar-pelada';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PeladaService } from './pelada.service';
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { PerfilService } from './perfil.service';
import { InfoPerfilPage } from '../pages/info-perfil/info-perfil';

export const firebaseConfig = {
  apiKey: "AIzaSyCotTr78ngNf15QqLGgvrh_MBhre5qQGB8",
  authDomain: "peladuff.firebaseapp.com",
  databaseURL: "https://peladuff.firebaseio.com",
  projectId: "peladuff",
  storageBucket: "peladuff.appspot.com",
  messagingSenderId: "103367465080"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    HistoricoPage,
    PerfilPage,
    CriarPeladaPage,
    LoginPage,
    InfoPerfilPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    HistoricoPage,
    PerfilPage,
    CriarPeladaPage,
    LoginPage,
    InfoPerfilPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PeladaService,
    AuthService,
    PerfilService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
