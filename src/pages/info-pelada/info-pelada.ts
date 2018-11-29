import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeladaService } from '../../app/pelada.service';
import { PerfilService } from '../../app/perfil.service';
import { AuthService } from '../../app/auth.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

/**
 * Generated class for the InfoPeladaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-pelada',
  templateUrl: 'info-pelada.html',
})
export class InfoPeladaPage {
  peladas;
  pelada;
  participantes;
  userId;
  perfis;
  participaFlag = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private peladaService: PeladaService,private perfilService: PerfilService,private authService: AuthService) {
    this.pelada = this.navParams.get('peladaParam');

    this.participantes = this.peladaService.fetchParticipantes(this.pelada);
    
    this.authService.getCurrentUser().subscribe(authState => {
      this.userId = authState.uid;
      console.log(this.userId);
      this.perfis = this.perfilService.fetchPerfil(this.userId);
      console.log(this.perfis);
    });
    
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPeladaPage');
  }

  ngOninit(){
    this.peladaService.fetchParticipantes(this.pelada);
    this.perfilService.fetchPerfil(this.userId);
  }


  addParticipante(pelada,nome){
    this.peladaService.addParticipante(pelada,nome);
    this.participaFlag = true;
  }

  removeParticipante(pelada){
    this.peladaService.removeParticipante(pelada,this.userId);
    this.participaFlag = false;
  }
}