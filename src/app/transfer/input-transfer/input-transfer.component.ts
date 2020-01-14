import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transfer } from '../transfer.model'
import { TransferService } from '../transfer.service';
import { ProgressIndicatorService } from '../../progress-indicator.service';

//import service, progress, 

@Component({
  selector: 'app-input-transfer',
  templateUrl: './input-transfer.component.html',
  styleUrls: ['./input-transfer.component.css']
})
export class InputTransferComponent implements OnInit {

  transfer = new Transfer(undefined,undefined,0,"");

  constructor(private router:Router,
              private transferService : TransferService,
            private progress : ProgressIndicatorService) { }

  lakukangTransfer() : void{
    this.progress.toggleIndicator("Sedang memproses Transfer");
    this.transferService.simpan(this.transfer)
    .then(() => {
      this.progress.toggleIndicator(null);
      this.router.navigate(['transfer/konfirmasi']);
    })
    .catch(error => {
      console.log("ini masuk di catch" +error);
      this.progress.toggleIndicator(null);
    });
    // this.router.navigate(['transfer/konfirmasi']);
  }

  ngOnInit() {
  }
  
  get debugFrom(){
    return JSON.stringify(this.transfer)
  }

}
