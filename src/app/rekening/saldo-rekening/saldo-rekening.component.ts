import { Component, OnInit } from '@angular/core';
import { Rekening } from '../rekening.model';

@Component({
  selector: 'app-saldo-rekening',
  templateUrl: './saldo-rekening.component.html',
  styleUrls: ['./saldo-rekening.component.css']
})
export class SaldoRekeningComponent implements OnInit {

  pilihanRekening : Rekening; 
  // = new Rekening('XYZ','ABC123','John');

  constructor() { }

  pilihRekening(rek : Rekening){
    this.pilihanRekening = rek;
  }

  ngOnInit() {
  }

}
