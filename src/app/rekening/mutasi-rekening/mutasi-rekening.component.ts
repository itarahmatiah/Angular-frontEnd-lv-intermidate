import { Component, OnInit } from '@angular/core';
import {ProgressIndicatorService} from '../../progress-indicator.service';

@Component({
  selector: 'app-mutasi-rekening',
  templateUrl: './mutasi-rekening.component.html',
  styleUrls: ['./mutasi-rekening.component.css']
})
export class MutasiRekeningComponent implements OnInit {

  constructor(private progress : ProgressIndicatorService ) { }
  showNotification() {
    this.progress.toggleIndicator("Hello");
    setTimeout(() => this.progress.toggleIndicator(null),3000)
  }
  hideNotification(){
    this.progress.toggleIndicator(null);
  }

  ngOnInit() {
  }

}
