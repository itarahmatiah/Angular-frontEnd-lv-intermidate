import { Component, OnInit, Input } from '@angular/core';
import { Rekening } from '../rekening.model';

@Component({
  selector: 'app-detail-rekening',
  templateUrl: './detail-rekening.component.html',
  styleUrls: ['./detail-rekening.component.css']
})
export class DetailRekeningComponent implements OnInit {

  @Input() rekening : Rekening; 
  // = new Rekening('XYZ','ABC123','John');

  constructor() { }

  pilihRekening(rek : Rekening){
    this.rekening = rek;
  }

  ngOnInit() {
  }

}
