import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaftarRekeningComponent } from './daftar-rekening/daftar-rekening.component';
import { SaldoRekeningComponent } from './saldo-rekening/saldo-rekening.component';
import { MutasiRekeningComponent } from './mutasi-rekening/mutasi-rekening.component';

import { RouterModule, Route } from '@angular/router';
import { PilihanRekeningComponent } from './pilihan-rekening/pilihan-rekening.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { DetailRekeningComponent } from './detail-rekening/detail-rekening.component';
import { AuthService } from "../auth.service";
import { CekLoginGuard } from '../ceklogin.service';

const routingRekening : Route[] = [
  {path : "rekening/list" , component:DaftarRekeningComponent, canActivate:[CekLoginGuard]},
  {path : "rekening/saldo" , component:SaldoRekeningComponent, canActivate:[CekLoginGuard]},
  {path : "rekening/mutasi" , component:MutasiRekeningComponent, canActivate:[CekLoginGuard]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingRekening),
    BsDropdownModule.forRoot()
  ],

  declarations: [
    DaftarRekeningComponent, 
    SaldoRekeningComponent, 
    MutasiRekeningComponent, 
    PilihanRekeningComponent, DetailRekeningComponent
  ],

  exports: [
    PilihanRekeningComponent
  ]
})
export class RekeningModule { }
