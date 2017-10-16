import { Component } from '@angular/core';
import { MainComponent } from './main.component';
import { SlotsComponent } from './slot.component';
import { IPrimaryDetails } from './classes';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/slot.component.css']
})
export class AppComponent {

  primary_details: IPrimaryDetails;
  showSlots_flag: boolean = false;

  // Sets primary details emitted by main component which is transferred to slot component
  SetPrimaryDetails(det: IPrimaryDetails) {
    this.primary_details = det;
    this.showSlots_flag = true;
  }

  // Reloads app component based on location change
  LocationChanged(flg: boolean) {
    this.showSlots_flag = false;
  }

}
