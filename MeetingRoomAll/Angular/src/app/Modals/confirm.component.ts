import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormDetails } from "../classes";

export interface ConfirmModel {
  bookingDetails: FormDetails;
  title:string;
}

@Component({
  selector: 'confirm',
  templateUrl:'app/Modals/confirm.component.html',
  styleUrls:['app/Modals/confirm.component.css']
})
export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  bookingDetails: FormDetails;
  title:string;

  constructor(dialogService: DialogService) {
    super(dialogService);    
  }
  ngOnInit(){
  }
  confirm() {
    this.close();
  }
}