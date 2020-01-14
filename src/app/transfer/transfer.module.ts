import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTransferComponent } from './input-transfer/input-transfer.component';
import { KonfirmasiTransferComponent } from './konfirmasi-transfer/konfirmasi-transfer.component';
import { RouterModule, Route } from '@angular/router';
import { RekeningModule } from '../rekening/rekening.module';
import { FormsModule } from '@angular/forms';

import { AuthService } from "../auth.service";
import { CekLoginGuard } from '../ceklogin.service';

const routingTransfer : Route[] = [
  {path : "transfer/input" , component:InputTransferComponent, canActivate:[CekLoginGuard]},
  {path : "transfer/konfirmasi" , component:KonfirmasiTransferComponent, canActivate:[CekLoginGuard]},
]

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routingTransfer),
    RekeningModule,
    FormsModule
  ],
  declarations: [InputTransferComponent, KonfirmasiTransferComponent]
})
export class TransferModule { }
