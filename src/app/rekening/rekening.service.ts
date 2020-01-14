import { Injectable } from '@angular/core';
import { Rekening } from './rekening.model';
// import { resolve } from 'dns';
import { Http, Headers } from '@angular/http';

import { AuthService } from '../auth.service';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class RekeningService {

  private serverUrl = 'api/rekening';

  constructor(private httpClient : Http, private authService : AuthService){}
  ambilDataRekening(): Promise<Rekening[]>{
    //ini sebelum ada Authentication
    // return this.httpClient.get(this.serverUrl)
    // .toPromise()
    // .then(hasil => hasil.json() as Rekening[])

    //ini setelah ada authentication
    let headers = new Headers();
    headers.append('Authorization', "Bearer "+this.authService.getCurrentUser().token);
    return this.httpClient.get(this.serverUrl, {headers: headers})
    .toPromise()
    .then(hasil => hasil.json() as Rekening[])
    .catch(this.hendleError);

  }

  private hendleError(error : any) : Promise<any>{
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  
  // constructor() { }
  // ambilDataRekening() : Promise<Rekening[]>{
  //   let hasil: Rekening[] =[
  //     new Rekening("R0001","12345","Rekening giro"),
  //     new Rekening("R0002","67890","Rekening bla bla bla")
  //   ];
  //   // return Promise.resolve(hasil); 
     
  //   //jika pake delay
  //   return new Promise(
  //     resolve => {
  //       setTimeout(() => resolve(hasil),2000)
  //     }
  //   )

  // }



}
