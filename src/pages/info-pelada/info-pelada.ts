import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeladaService } from '../../app/pelada.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private peladaService: PeladaService) {
    this.pelada = this.navParams.get('peladaParam');
  }

  ngOnInit(){
      this.peladas = this.peladaService.fetchByPelada(this.pelada);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPeladaPage');
  }

}
