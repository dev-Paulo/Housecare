import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AdcContaPage } from './adc-conta.page';

const routes: Routes = [
  {
    path: '',
    component: AdcContaPage
  }
];

@NgModule({
  imports: [
    CommonModule,    
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdcContaPage]
})
export class AdcContaPageModule{
  

  constructor() {

  }
  
}
