import { Component, OnInit } from '@angular/core';
import { RekeningService} from '../rekening.service';
import { Rekening } from '../rekening.model'

@Component({
  selector: 'app-daftar-rekening',
  templateUrl: './daftar-rekening.component.html',
  styleUrls: ['./daftar-rekening.component.css']
})
export class DaftarRekeningComponent implements OnInit {

  daftarRekening : Rekening[];

  constructor(private rekeningService : RekeningService) { 
    rekeningService.ambilDataRekening()
    .then(hasil => this.daftarRekening = hasil)
    .catch(this.hendleError)
  }
  tampilkanDetail(rek : Rekening){
    console.log("Menampilkan info rekening" +rek)
  }
  private hendleError(error : any) : Promise<any>{
    console.error("Terjadi Error"+error);
    return Promise.reject(error.message || error);
  }

  ngOnInit() {
  }

}
