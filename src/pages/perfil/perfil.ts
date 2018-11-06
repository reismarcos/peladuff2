import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../app/auth.service';
import { LoginPage } from '../login/login';
import { PerfilService } from '../../app/perfil.service';
import { TabsPage } from '../tabs/tabs';
import { InfoPerfilPage } from '../info-perfil/info-perfil';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  userId;
  perfil;
  newPerfilFlag = false;
  deletePerfilFlag = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private perfilService: PerfilService,private alertCtrl: AlertController) {
    this.perfil = this.navParams.get('perfilParam');
    this.authService.getCurrentUser().subscribe(authState => {
      this.userId = authState.uid;
    });

    if(!this.perfil){
      this.perfil = {
      id: '',
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



  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  
  

  savePerfil(){
    if(this.newPerfilFlag){
      this.perfilService.addPerfil(this.perfil,this.userId);
      this.navCtrl.setRoot(TabsPage);
    }
    else{
      this.perfilService.editarPerfil(this.perfil,this.userId);
      this.navCtrl.push(InfoPerfilPage);

    }
  }
    

}
