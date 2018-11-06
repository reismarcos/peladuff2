import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import { AuthService } from '../../app/auth.service';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { PerfilService } from '../../app/perfil.service';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  perfil;
  username = '';
  password = '';
  newPerfilFlag = false;
  deletePerfilFlag = false;
  userId;
  

  constructor(private authService: AuthService, public navParams: NavParams, private PerfilService: PerfilService, public navCtrl: NavController, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.perfil = this.navParams.get('perfilParam');

    if(!this.perfil){
      this.perfil = {
      nome: '',
      curso: '',
      cidade: '',
      modalidadeFav: '',
      posFav: '',
      matricula: '',
      };
      this.newPerfilFlag = true;
      }

  }
    

  

  onSignUp(){

    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });    
    loading.present();      

    this.authService.signup(this.username, this.password)       
      .then(
        data => {
          loading.dismiss()
          this.navCtrl.push(PerfilPage)
        }
      ) // successfully create new user
      .catch(
        error => {
          loading.dismiss();
        // display error in a alert
          const alert = this.alertCtrl.create({
            title: 'Signup failed',
            message: error.message,
            buttons: ['Ok']
          });
          alert.present();          
          
        } // potential errors
      ); // result is a promise  
       
      
  }   

  onPerfil(){
    
  }


}