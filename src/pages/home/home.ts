import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeladaService } from '../../app/pelada.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { CriarPeladaPage } from '../criar-pelada/criar-pelada';
import { InfoPeladaPage } from '../info-pelada/info-pelada';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  peladas;
  criarPelada = CriarPeladaPage;
  constructor(public navCtrl: NavController, private peladaService: PeladaService, db: AngularFireDatabase) {
    console.log(db); 
    
  }

  ngOnInit(){
    this.peladas = this.peladaService.fetchPeladas();
  }

  onAddClick(){
    this.navCtrl.push(CriarPeladaPage,{
      title : "Criar",
    });
  }



  ItemClick(pelada){
    this.navCtrl.push(InfoPeladaPage,{
      peladaParam : pelada,
    });
  }

}
