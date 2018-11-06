import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PeladaService } from '../../app/pelada.service';
import { AuthService } from '../../app/auth.service';
import { PerfilService } from '../../app/perfil.service';

/**
 * Generated class for the CriarPeladaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-pelada',
  templateUrl: 'criar-pelada.html',
})

export class CriarPeladaPage {
  pelada;
  title;
  newPeladaFlag = false;
  deletePeladaFlag = false;
  myDate: String = new Date().toISOString();
  userId;
  perfis  ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private peladaService: PeladaService, private alertCtrl: AlertController,private authService: AuthService, private perfilService: PerfilService) {
    this.pelada = this.navParams.get('peladaParam');
    this.myDate = new Date().toISOString();
    this.title = this.navParams.get("title");
    this.authService.getCurrentUser().subscribe(authState => {
      this.userId = authState.uid;
      this.perfis = this.perfilService.fetchPerfis(this.userId);

    });


    if(!this.pelada){
      this.pelada = {
      id: '',
      data: '',
      nome: '',
      local: '',
      hora: '',
      descricao: '',
      maxJogadores: '',
      autor:'',
      };
      this.newPeladaFlag = true;
      }
  }

  onTrash(){
    let confirm = this.alertCtrl.create({
    title: 'Excluir?',
    message: `Você tem certeza que deseja excluir essa pelada?`, // use backtick to insert string desc
    buttons: [
      {
        text: 'Cancelar' // don't do anything when cancel
      },
      {
        text: 'Confirmar',
        handler: () => {
        //this.noteService.removeNote(this.note);
        this.deletePeladaFlag = true;
        this.navCtrl.pop();
        }
        }
        ]
        });
        confirm.present();

  }
  ionViewWillLeave() {
    
    if(this.pelada.nome === "" && this.pelada.data === "" && this.pelada.local === ""){      
      // if note is blank don't do anything      
    }
    
    else if(this.deletePeladaFlag){
      this.peladaService.removePelada(this.pelada,this.userId);
      console.log("delete pelada");
    }
      
  }

 
  savePelada(){
    if(this.newPeladaFlag){
      this.peladaService.removePelada(this.pelada,this.userId)
      this.peladaService.addPelada(this.pelada,this.userId);
    }
    else{
      this.peladaService.removePelada(this.pelada,this.userId)
      this.peladaService.editPelada(this.pelada,this.userId); 
    }
    this.navCtrl.pop();      
  }
}



