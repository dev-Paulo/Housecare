import { Injectable } from '@angular/core';
import { Conta } from './conta.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Categoria } from './editar-conta/categoria.model';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface ContaData {
    categoria: Categoria;
    dataVencimento: string;
    titulo: string;
    userId: string;
    valor: number; 
}

@Injectable({
    providedIn: 'root'
})

export class ContasService {
        public _contas = new BehaviorSubject<Conta[]> ([]);

    get contas() {
        return this._contas.asObservable();
    }

    constructor( private authService: AuthService, public http: HttpClient ) {

    }

    fetchContas() {
       return this.http.get<{[key: string]: ContaData}>('https://housecare-feb0f.firebaseio.com/contas.json').pipe(
           map(resData => {
            const contas = [];
            for (const key in resData) {
                if (resData.hasOwnProperty(key)) {                    
                    contas.push(new Conta(
                       key,
                       resData[key].titulo,
                       resData[key].valor,
                       resData[key].dataVencimento.toString(),
                       resData[key].categoria,                       
                       resData[key].userId
                   )); 
                }
            }
            return contas;
           }),
           tap(contas => {
               this._contas.next(contas);
           })
        );
    }

    getConta( id: string) {
        return this.contas.pipe(take(1), map(contas => {
            return {...contas.find(c => c.id === id)};
        }));
    }

    adcConta(titulo: string, valor: number, dataVencimento: string, categoria: Categoria) {
        let generatedId: string;
        const newConta = new Conta(
            Math.random().toString(),
            titulo,
            valor,
            dataVencimento,
            categoria,
            this.authService.userId
        );
        return this.http.post<{name: string}>('https://housecare-feb0f.firebaseio.com/contas.json',
        {...newConta, id: null})
        .pipe(
            switchMap(resData => {
            generatedId = resData.name;  
            return this.contas;
          }),
          take(1), 
          tap(contas => {
              newConta.id = generatedId;
              this._contas.next(contas.concat(newConta));
          })
         );
       /*  return this.contas.pipe(take(1)).subscribe(contas => {
            this._contas.next(contas.concat(newConta));
        }); */
    }

    updateConta(contaId: string, titulo: string, valor: number) {
        return this.contas.pipe(take(1), tap(contas => {
            const updatedContaIndex = contas.findIndex(conta => conta.id === contaId);
            const updatedContas = [...contas];
            const oldConta = updatedContas[updatedContaIndex];
            updatedContas[updatedContaIndex] = new Conta(
                oldConta.id,
                titulo,
                valor,
                oldConta.dataVencimento,
                oldConta.categoria,
                oldConta.userId
                );
            this._contas.next(updatedContas);
        })
        );
    }
}
