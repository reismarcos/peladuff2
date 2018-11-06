import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarPeladaPage } from './criar-pelada';

@NgModule({
  declarations: [
    CriarPeladaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarPeladaPage),
  ],
})
export class CriarPeladaPageModule {}
