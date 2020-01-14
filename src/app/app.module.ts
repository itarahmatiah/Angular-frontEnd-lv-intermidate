import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionModule, ModalModule} from 'ngx-bootstrap';
import { RouterModule, Route } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuSampingComponent } from './menu-samping/menu-samping.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MenuAtasComponent } from './menu-atas/menu-atas.component';
// import { SubTransaksiSatuComponent } from './sub-transaksi-satu/sub-transaksi-satu.component';
import {RekeningModule} from './rekening/rekening.module';
// import { SubTransaksiDuaComponent } from './sub-transaksi-dua/sub-transaksi-dua.component';
import { TransferModule } from './transfer/transfer.module';
import { SubTransaksiTigaComponent } from './sub-transaksi-tiga/sub-transaksi-tiga.component';

import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';

import { AuthService } from "./auth.service";
import { CekLoginGuard } from './ceklogin.service';

import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

const routingAplikasi : Route[] =[
  {path : "rekening", redirectTo: '/rekening', pathMatch : 'full', canActivate:[CekLoginGuard]},
  // {path : "transfer", component :SubTransaksiDuaComponent},
  {path : "transfer", redirectTo: '/transfer', pathMatch : 'full', canActivate:[CekLoginGuard]},
  {path : "profil", component :SubTransaksiTigaComponent, canActivate:[CekLoginGuard]},
  {path : "login", component :LoginComponent},
  {path : "**", component :MainLayoutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MenuSampingComponent,
    MainLayoutComponent,
    MenuAtasComponent,
    // SubTransaksiSatuComponent,
    // SubTransaksiDuaComponent,
    SubTransaksiTigaComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(), ModalModule,
    RouterModule.forRoot(routingAplikasi),
    RekeningModule,
    TransferModule,
    FormsModule,
    HttpModule
  ],
  providers: [CekLoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
