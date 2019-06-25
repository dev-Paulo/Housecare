import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContasService } from './contas.service';
import { Conta } from './conta.model';
import { IonItemSliding, NavController} from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contas',
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.scss'],
})
export class ContasPage implements OnInit, OnDestroy {

  contasSub: Subscription;
  loadedContas: Conta[];  
  listedLoadedContas: Conta[]

  constructor(    
    private navCtrl: NavController, 
    private contasService: ContasService) { }

  ionViewWillEnter() {
    this.contasService.fetchContas().subscribe();
  }
 
  ngOnInit() { 
    this.contasSub = this.contasService.contas.subscribe(contas => {
      this.loadedContas = contas;
      this.listedLoadedContas = this.loadedContas.slice(1);
    }); 
  }

  onEditarConta(slidingConta: IonItemSliding) {    
    slidingConta.close();
  }

  ngOnDestroy() {
    if (this.contasSub) {
      this.contasSub.unsubscribe();
    }
  }

  onChangeSegment(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
