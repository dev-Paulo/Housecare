import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContasService } from '../contas.service';
import { Categoria } from '../editar-conta/categoria.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-adc-conta',
  templateUrl: './adc-conta.page.html',
  styleUrls: ['./adc-conta.page.scss'],
})
export class AdcContaPage implements OnInit {

  form: FormGroup;

  public categoriaSelecionada: Categoria;

  public categorias = new Array<{
    name: string,
    value: number,
    icon: string,
    color: string
  }>();

  constructor(
    private contasService: ContasService,
    private router: Router,
    public toast: ToastController
    ) {
    this.selectCategorias();
    }

  ngOnInit() {
    this.form = new FormGroup(
      {
        nome: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        valor: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }),
        dataVencimento: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }) ,
        categoria: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      }
      );
  }

  selectCategorias() {
    this.categorias = [
      {
        value: 1,
        name: 'Aluguel',
        icon: 'fas fa-home fa-home fa-2x ',
        color: '#68C5D8'
      },
      {
        value: 2,
        name: 'Netflix',
        icon: 'fab fa-youtube fa-2x',
        color: '#FF695E'
      },
      {
        value: 3,
        name: 'Condominio',
        icon: 'fas fa-building fa-2x ',
        color: '#89C981'
      },
      {
        value: 4,
        name: 'Luz',
        icon: 'fas fa-lightbulb fa-2x ',
        color: '#ECBF56'
      },
      {
        value: 5,
        name: 'Internet',
        icon: 'fas fa-wifi fa-2x',
        color: '#f06595'
      }
    ];
  }

  onSelectCategoria(ev) {
      this.categorias.forEach(categoria => {
      if (ev.detail.value === categoria.value) {
        this.categoriaSelecionada = categoria;
      }
    });
  }


  async onCreateConta() {
    if (!this.form.valid) {
      return;
    } else {
      this.contasService.adcConta(
        this.form.value.nome,
        +this.form.value.valor,
        this.form.value.dataVencimento,
        this.categoriaSelecionada,
        ).subscribe(() => {
          this.form.reset();
          this.router.navigate(['/housecare/tabs/contas']);
        });
      const toast = await this.toast.create({
          message: 'Sua conta foi criada com sucesso, bichão!',
          position: 'top',
          duration: 3000,
          color: 'tertiary'
        });
      toast.present();
    }
    }
}
