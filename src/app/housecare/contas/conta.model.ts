import { Categoria } from './editar-conta/categoria.model';


export class Conta {
    constructor( 
        public id: string, 
        public titulo: string,
        public valor: number,
        public dataVencimento: string,
        public categoria: Categoria,
        public userId: string
        ) {}
}
