import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Transfer } from './transfer.model';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private serverUrl = 'api/transfer/'

  constructor(private httpClient : Http) { }

  simpan(transfer : Transfer) : Promise<void>{
    return this.httpClient.post(this.serverUrl, transfer)
    .toPromise()
    .then(() => {console.log("Sukses menyimpan");})
    .catch(error => console.log("Gagal menyimpan" +error));
  }
}
