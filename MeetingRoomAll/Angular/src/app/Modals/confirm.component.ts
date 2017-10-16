import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormDetails } from "../classes";

export interface ConfirmModel {
  bookingDetails: FormDetails;
}

@Component({
  selector: 'confirm',
  templateUrl:'app/Modals/confirm.component.html'
})
export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  bookingDetails: FormDetails;

  constructor(dialogService: DialogService) {
    super(dialogService);    
  }
  ngOnInit(){
    console.log(this.bookingDetails);
  }
  confirm() {
    this.close();
  }
}