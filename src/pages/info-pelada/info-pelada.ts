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
  participar = true;
  button;
  teste;
  
  users;
  constructor(public navCtrl: NavController, public navParams: NavParams, private peladaService: PeladaService,private perfilService: PerfilService,private authService: AuthService) {
    this.pelada = this.navParams.get('peladaParam');
    this.participantes = this.peladaService.fetchParticipantes(this.pelada);
    console.log(this.participantes);
    console.log(this.teste);
    this.authService.getCurrentUser().subscribe(authState => {
      this.userId = authState.uid;
      console.log(this.userId);
      this.perfis = this.perfilService.fetchPerfil(this.userId);
      console.log(this.perfis);
    });

    this.users = this.peladaService.userParticipa(this.userId,this.pelada);
    console.log(this.users);
  
  

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPeladaPage');
  }

  ngOninit(){
    this.peladaService.fetchParticipantes(this.pelada);
    this.perfilService.fetchPerfil(this.userId);
    this.peladaService.userParticipa(this.userId,this.pelada);
    console.log(this.teste)
  }


  addParticipante(pelada,nome){
    this.peladaService.addParticipante(pelada,nome);
  }

  removeParticipante(pelada){
    this.peladaService.removeParticipante(pelada,this.userId);
  }
}
