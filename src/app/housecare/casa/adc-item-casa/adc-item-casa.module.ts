import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdcItemCasaPage } from './adc-item-casa.page';

const routes: Routes = [
  {
    path: '',
    component: AdcItemCasaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdcItemCasaPage]
})
export class AdcItemCasaPageModule {}
