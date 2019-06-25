import { Component, OnInit, OnDestroy } from '@angular/core';
import { Conta } from '../conta.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ContasService } from '../contas.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-detalhe-conta',
  templateUrl: './detalhe-conta.page.html',
  styleUrls: ['./detalhe-conta.page.scss'],
})
export class DetalheContaPage implements OnInit, OnDestroy {
  conta: Conta;
  private contaSub: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private navCtrl: NavController, 
    private contasService: ContasService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('contaId')) {
        this.navCtrl.navigateBack('/housecare/tabs/contas');
        return;
      }
      this.contaSub = this.contasService.getConta(paramMap.get('contaId')).subscribe(conta => {
        this.conta = conta;
      });
    });
    }

  ngOnDestroy() {
    if (this.contaSub) {
      this.contaSub.unsubscribe();
    }
  }

}



