import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousecarePage } from './housecare.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: HousecarePage,
        children: [
            {
                path: 'contas',
                children: [
                    {
                        path: '',
                        loadChildren: './contas/contas.module#ContasPageModule'
                    },
                    {
                        path: 'adc',
                        loadChildren: './contas/adc-conta/adc-conta.module#AdcContaPageModule'
                    },
                    {
                        path: 'editar/:contaId',
                        loadChildren: './contas/editar-conta/editar-conta.module#EditarContaPageModule'
                    },
                    {
                        path: ':contaId',
                        loadChildren: './contas/detalhe-conta/detalhe-conta.module#DetalheContaPageModule'
                    }
                ]
            },
            {
                path: 'casa',
                children: [
                    {
                        path: '',
                        loadChildren: './casa/casa.module#CasaPageModule'
                    },
                    {
                        path: 'adc',
                        loadChildren: './casa/adc-item-casa/adc-item-casa.module#AdcItemCasaPageModule'
                    },
                    {
                        path: 'editar/:itemcasaId',
                        loadChildren: './casa/editar-item-casa/editar-item-casa.module#EditarItemCasaPageModule'
                    },
                    {
                        path: ':itemcasaId',
                        loadChildren: './casa/detalhe-item-casa/detalhe-item-casa.module#DetalheItemCasaPageModule'
                    }

                ]
            },
            {
                path: '',
                redirectTo: './housecare/tabs/contas',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: './housecare/tabs/contas',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HousecareRoutingModule {}
