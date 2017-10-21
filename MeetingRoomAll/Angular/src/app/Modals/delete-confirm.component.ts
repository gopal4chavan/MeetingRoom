import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title: string;
}

@Component({
  selector: 'confirm',
  templateUrl: 'app/Modals/delete-confirm.component.html',
  styleUrls:['app/Modals/delete-confirm.component.css']
})
export class DeleteConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    this.result = true;
    this.close();
  }
  cancel(){
      this.result=false;
      this.close();
  }
}