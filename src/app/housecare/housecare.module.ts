import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HousecarePage } from './housecare.page';
import { HousecareRoutingModule } from './housecare-routing.module';



@NgModule({
  imports: [
    CommonModule,   
    IonicModule,
    HousecareRoutingModule
  ],
  declarations: [HousecarePage]
})
export class HousecarePageModule {}
