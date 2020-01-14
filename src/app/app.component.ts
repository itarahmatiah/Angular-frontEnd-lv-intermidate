import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProgressIndicatorService } from './progress-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'FIRST APP';
  notification : String;
  subscription : Subscription;

  @ViewChild("staticModal") staticModal;

  constructor(private progress : ProgressIndicatorService){

  }
  ngOnInit(): void {
    this.subscription = this.progress.getStatus().subscribe(
      data => {
        this.notification = data;
        if(data){
          this.staticModal.show();
        }else{
          this.staticModal.hide();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  
}
