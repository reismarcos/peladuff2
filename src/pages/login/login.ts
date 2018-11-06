import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../app/auth.service';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username = '';
  password = '';  

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, 
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  signIn(){
    console.log(this.username + ' ' + this.password);        
    
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });    
    loading.present();    
    
    this.authService.signIn(this.username,this.password)
      .then(authState => {   
          loading.dismiss();
          console.log("Login-then",authState);          
          this.navCtrl.setRoot(TabsPage);
      })
      .catch(error => {
          console.log("login-error", error);          
          loading.dismiss();                           
          const alert = this.alertCtrl.create({
            title: 'Signin failed.',
            message: error.message,
            buttons:['Ok']
          });
          alert.present();                                 
      }) // e.g. invalid password    
  }

  signUp(){
    this.navCtrl.push('SignupPage');
  }
  
}
