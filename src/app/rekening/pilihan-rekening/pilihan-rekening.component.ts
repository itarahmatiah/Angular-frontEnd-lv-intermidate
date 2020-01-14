import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { RekeningService} from '../rekening.service';
import { Rekening } from '../rekening.model'

@Component({
  selector: 'app-pilihan-rekening',
  templateUrl: './pilihan-rekening.component.html',
  styleUrls: ['./pilihan-rekening.component.css']
})
export class PilihanRekeningComponent implements OnInit {

  daftarRekening : Rekening[];
  @Output() pilihan = new EventEmitter<Rekening>();

  constructor(private rekeningService : RekeningService) { 
    rekeningService.ambilDataRekening()
    .then(hasil => this.daftarRekening = hasil)
    .catch(this.hendleError)
  }
  private hendleError(error : any) : Promise<any>{
    console.error("Terjadi Error"+error);
    return Promise.reject(error.message || error);
  }

  pilih(rek : Rekening) {
    console.log("Rekening "+rek.nomor+" dipilih")
    this.pilihan.emit(rek)
  }

  ngOnInit() {
  }

}
