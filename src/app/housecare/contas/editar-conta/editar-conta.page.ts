import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ContasService } from '../contas.service';
import { Conta } from '../conta.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-editar-conta',
  templateUrl: './editar-conta.page.html',
  styleUrls: ['./editar-conta.page.scss'],
})
export class EditarContaPage implements OnInit, OnDestroy {

  conta: Conta;
  form: FormGroup;
  private contaSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private contasService: ContasService,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('contaId')) {
        this.navCtrl.navigateBack('/housecare/tabs/contas');
        return;
      }
      this.contaSub = this.contasService.getConta(paramMap.get('contaId')).subscribe(conta => {
        this.conta = conta;
        this.form = new FormGroup(
          {
            nome: new FormControl(this.conta.titulo, {
              updateOn: 'blur',
              validators: [Validators.required]
            }),
            valor: new FormControl(this.conta.valor, {
              updateOn: 'blur',
              validators: [Validators.required, Validators.min(1)]
            }),
          }
          );
      });
    });
  }

  ngOnDestroy() {
    if (this.contaSub) {
      this.contaSub.unsubscribe();
    }
  }

  onEditConta() {
    if (!this.form.valid) {
      console.log('error');
      return;
    }
    this.contasService.updateConta(
     this.conta.id,
     this.form.value.nome,
     this.form.value.valor
     ).subscribe(() => {
       this.form.reset();
       this.router.navigate(['/housecare/tabs/contas']);
     });   
  }

}
