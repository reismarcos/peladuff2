import { Injectable } from '@angular/core';
import {first} from 'rxjs/operators'
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PeladaService{    
  peladas;
  aux=0;
  user;
  objeto: FirebaseObjectObservable<any>;
  lista: FirebaseListObservable<any>;
  constructor(private db: AngularFireDatabase){      
}  

fetchPeladas(){   
  return this.db.list('/peladas/');     
}

fetchByUser(userId){
  return this.db.list('/peladas/',{
    query: {
        orderByChild: 'autor',
        equalTo: userId,
    }
  });
}

removePelada(pelada,userId){
  this.db.object(userId + '/peladas/'+ pelada.$key).remove()
  .then( x=> console.log("SUCCESS"))
  .catch( error => {
    alert("Could not delete note.");
    console.log("ERROR", error)
  });

}

addPelada(pelada,userId){    
  this.db.list('/peladas/').push({   
      nome: pelada.nome,             
      local: pelada.local,
      data: pelada.data,
      hora: pelada.hora,
      modalidade: pelada.modalidade,
      maxJogadores: pelada.maxJogadores,
      descricao: pelada.descricao,   
      autor: userId,
  });
} 

editPelada(pelada,userId){
  this.db.object('/peladas/'+ pelada.$key).update({
    nome: pelada.nome,             
    local: pelada.local,
    data: pelada.data,
    hora: pelada.hora,
    modalidade: pelada.modalidade,
    maxJogadores: pelada.maxJogadores,
    descricao: pelada.descricao,      
  });    
}

addParticipante(pelada,perfil){
  this.db.object('/peladas/'+ pelada.$key + '/participantes/'+perfil.$key).set({
    nome:perfil.nome,
    id:perfil.$key,
  });
}

fetchParticipantes(pelada){
  return this.db.list('/peladas/'+pelada.$key + '/participantes/'); 
}

userParticipa(userId,pelada){
  return this.user = this.db.list('/peladas/'+ pelada.$key + '/participantes/',{
    query: {
        orderByChild: 'id',
        equalTo: userId,
    }
   
  });
 
}

removeParticipante(pelada,perfil){
  this.db.object('/peladas/'+ pelada.$key + '/participantes/' +perfil).remove();
}

}