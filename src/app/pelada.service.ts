import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PeladaService{    
  peladas;

  constructor(private db: AngularFireDatabase){      
}  

fetchPeladas(){   
  return this.db.list('/peladas/');     
}

fetchByUser(userId){
  return this.db.list(userId+'/peladas/');
}

fetchByPelada(pelada){
  return this.db.list('peladas/'+pelada.$key);
}

removePelada(pelada,userId){
  this.db.object('/peladas/'+ pelada.$key).remove()
    .then( x=> console.log("SUCCESS"))
    .catch( error => {
      alert("Could not delete note.");
      console.log("ERROR", error)
    });

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
      autor: userId    
  });

  this.db.list(userId+'/peladas/').push({   
    nome: pelada.nome,             
    local: pelada.local,
    data: pelada.data,
    hora: pelada.hora,
    modalidade: pelada.modalidade,
    maxJogadores: pelada.maxJogadores,
    descricao: pelada.descricao,   
    autor: userId    
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
  
  this.db.object(userId + '/peladas/'+ pelada.$key).update({
    nome: pelada.nome,             
    local: pelada.local,
    data: pelada.data,
    hora: pelada.hora,
    modalidade: pelada.modalidade,
    maxJogadores: pelada.maxJogadores,
    descricao: pelada.descricao,      
  });     
  
  

}  
}