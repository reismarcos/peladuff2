import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CriarPeladaPage } from '../criar-pelada/criar-pelada';
import { PeladaService } from '../../app/pelada.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../app/auth.service';

/**
 * Generated class for the HistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {
  peladas;
  userId;
  constructor(public navCtrl: NavController, private peladaService: PeladaService, db: AngularFireDatabase,private authService: AuthService) {
    console.log(db); 
    this.authService.getCurrentUser().subscribe(authState => {
      this.userId = authState.uid;
    });
  }

  ngOnInit(){
    this.peladas = this.peladaService.fetchByUser(this.userId);
  }



  ItemClick(pelada){
    this.navCtrl.push(CriarPeladaPage,{
      peladaParam : pelada,
      title : "Editar",
    });
  }

}
