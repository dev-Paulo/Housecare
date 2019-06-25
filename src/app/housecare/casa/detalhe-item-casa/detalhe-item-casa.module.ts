import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalheItemCasaPage } from './detalhe-item-casa.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheItemCasaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalheItemCasaPage]
})
export class DetalheItemCasaPageModule {}
