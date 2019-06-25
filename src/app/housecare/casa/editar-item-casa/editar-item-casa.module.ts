import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarItemCasaPage } from './editar-item-casa.page';

const routes: Routes = [
  {
    path: '',
    component: EditarItemCasaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditarItemCasaPage]
})
export class EditarItemCasaPageModule {}
