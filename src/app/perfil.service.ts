import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PerfilService{    
  perfis;
  
  constructor(private db: AngularFireDatabase){      
}  

fetchPerfis(userId){   
  return this.db.list(userId+'/perfis');     
}   

removePerfil(perfil,userId){
  this.db.object(userId + "/perfis/"+perfil.$key).remove()
    .then( x=> console.log("SUCCESS"))
    .catch( error => {
      alert("Could not delete note.");
      console.log("ERROR", error) 
    });
}

addPerfil(perfil, userId){    
  this.db.list(userId + "/perfis").push({   
      nome: perfil.nome,             
      matricula: perfil.matricula,
      curso: perfil.curso,
      modalidadeFav: perfil.modalidadeFav,
      posFav: perfil.posFav,
      cidade: perfil.cidade,
  });   
 
} 

editarPerfil(perfil,userId){
  this.db.object(userId + "/perfis/"+perfil.$key).update({
    nome: perfil.nome,             
    matricula: perfil.matricula,
    curso: perfil.curso,
    modalidadeFav: perfil.modalidadeFav,
    posFav: perfil.posFav,
    cidade: perfil.cidade,
  });                
}  




}